import React from "react";
import { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Grid,
  ImageList,
  ImageListItem,
  CardMedia,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { TitlePage } from "../../components/atoms/TitlePage/TitlePage";
import { usePropertiesStore } from "../../stores/usePropertiesStore";
import { useTheme } from "@mui/material/styles";
import { LoadingSpinner } from "../../components/atoms/LoadingSpinner/LoadingSpinner";
import { NotFoundProperties } from "../../components/atoms/NotFoundProperties/NotFoundProperties";

export const PropertyPage = () => {
  const [currentProperty, setCurrentProperty] = useState(null);
  const { id } = useParams();
  const theme = useTheme();
  const { fetchProperties, isLoading, error, properties } =
    usePropertiesStore();

  useEffect(() => {
    fetchProperties();
    if (properties && properties.length > 0) {
      setCurrentProperty(properties.find((el) => Number(el.id) === Number(id)));
    }
  }, []);

  const style = {
    name: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    price: {
      fontSize: "18px",
    },
    city: {
      fontSize: "16px",
    },
    surface: {
      fontSize: "16px",
    },
    description: {
      fontSize: "16px",
    },
  };

  const propertyData = [];
  if (currentProperty)
    propertyData.push(
      {
        label: "Title",
        value: currentProperty.name,
        style: style.name,
      },
      {
        label: "Price",
        value: `${currentProperty.price} PLN`,
        style: style.price,
      },
      {
        label: "City",
        value: currentProperty.city,
        style: style.city,
      },
      {
        label: "Surface",
        value: `${currentProperty.surface} m2`,
        style: style.surface,
      },
      {
        label: "Description",
        value: currentProperty.description,
        style: style.description,
      }
    );

  const renderMainImage = (image, title) => (
    <CardMedia
      component="img"
      height="auto"
      image={image}
      alt={title}
      sx={{ width: "90%", maxHeight: 300, objectFit: "cover" }}
    />
  );

  const renderImageList = (images) => (
    <ImageList sx={{ width: "100%" }} cols={3} rowHeight={164}>
      {images.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={item}
            alt={`Property image ${index}`}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );

  if (isLoading) return <LoadingSpinner />;
  if (error)
    return (
      <NotFoundProperties message="Something went wrong, try again later." />
    );
  if (!isLoading && !currentProperty)
    return <NotFoundProperties message="Property not found." />;

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* <Button variant="contained"> Back </Button> */}
      <TitlePage title="Property Details" backToHomePage={true} />

      <Grid
        padding={1}
        container
        spacing={4}
        sx={{
          border: `${theme.palette.divider} 1px solid`,
          width: "100%",
          margin: "10px 0",
          backgroundColor: theme.palette.grey[100],
        }}
      >
        <Grid item xs={12} sm={4}>
          <Grid container spacing={2} direction="row" sx={{ padding: "10px" }}>
            {propertyData.map((item, index) => (
              <Grid item xs={12} sm={12} key={item.label}>
                <Box
                  key={item.label}
                  marginTop={index === propertyData.length - 1 ? 5 : 0}
                >
                  <Typography variant="body2">{item.label}</Typography>
                  <Typography variant="body1" align="justify" sx={item.style}>
                    {item.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            {currentProperty &&
              currentProperty.images &&
              currentProperty.images.length > 0 && (
                <>
                  {renderMainImage(
                    currentProperty.images[0],
                    currentProperty.name
                  )}
                  <Box sx={{ overflowY: "auto", flexGrow: 1 }}>
                    {renderImageList(currentProperty.images.slice(1))}
                  </Box>
                </>
              )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
