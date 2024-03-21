import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {
    Stack,
    Button,
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Dialog,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import {LoadingSpinner} from "../../atoms/LoadingSpinner/LoadingSpinner";
import {style} from "./style.ts";
import {usePropertiesStore} from "../../../stores/usePropertiesStore";
import {Pagination} from "../../molecules/Pagination/Pagination";
import {NotFoundProperties} from "../../atoms/NotFoundProperties/NotFoundProperties";
import {IconButtonWithTooltip} from "../../atoms/IconButtonWithTooltip/IconButtonWithToolitp";
import CloseIcon from "@mui/icons-material/Close";
import {Property} from "../../../types/Property.ts";
import {propertiesListMessages} from "./messages.ts";


export const PropertiesList = () => {
    const navigate = useNavigate();
    const {properties, fetchProperties, isLoading, filteredProperties, currentPage, setCurrentPage} = usePropertiesStore();
    const PER_PAGE = 8;
    // const [page, setPage] = useState(1);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
    const startIndex = (currentPage - 1) * PER_PAGE;
    const paginatedProperties = filteredProperties
        ? filteredProperties.slice(startIndex, startIndex + PER_PAGE)
        : [];

    // @ts-ignore
    const handleNavigateToProperty = (id) => {
        navigate(`/property/${id}`);
    };

    // @ts-ignore
    const renderButton = (id, style) => (
        <Button
            onClick={() => {
                handleNavigateToProperty(id);
            }}
            size="small"
            variant="contained"
            sx={style || style.button}
        >
            {propertiesListMessages.viewMore}
        </Button>
    );

    // @ts-ignore
    const handleOpenDialog = (property) => {
        setSelectedProperty(property);
        setIsOpenDialog(true);
      };

    const handleCloseDialog = () => {
        setIsOpenDialog(false);
        setSelectedProperty(null);
    };

    useEffect(() => {
        fetchProperties();
    }, [fetchProperties]);

    if (isLoading) {
        return <LoadingSpinner/>;
    }

    // @ts-ignore
    return (
        <>
            {filteredProperties && filteredProperties.length === 0 && (
                <NotFoundProperties message="No properties found, change your search criteria."/>
            )}
            <Pagination
                total={filteredProperties ? filteredProperties.length : 0}
                perPage={PER_PAGE}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
            <Grid container spacing={2} marginTop={1}>
                {properties &&
                    paginatedProperties.map((el) => (
                        <Grid item key={el.id} xs={12} sm={6} md={6} lg={3}>
                            <Card sx={style.card}
                                  onClick={() => handleOpenDialog(el)}>
                                <CardContent>
                                    <Typography sx={style.title}> {el.name} </Typography>
                                    <Box sx={style.imageIconsWrapper}>
                                        <Box sx={style.imageWrapper}>
                                            {/*@ts-ignore*/}
                                            <CardMedia
                                                image={el.images[0]}
                                                alt={el.name}
                                                sx={style.image}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography sx={style.description} variant="body2">
                                        {el.description}
                                    </Typography>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Typography sx={style.city}> {el.city} </Typography>
                                        <Typography sx={style.price}>
                                                                                       {`${el.price}  PLN`}{" "}
                                        </Typography>
                                    </Stack>
                                    <Box sx={style.buttonWrapper}>
                                        {renderButton(el.id, style.buttonDialog)}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
            <Dialog open={isOpenDialog} onClose={handleCloseDialog}>
                <Box sx={style.closeButtonWrapper}>
                    <IconButtonWithTooltip
                        title="Close"
                        ariaLabel="close"
                        icon={<CloseIcon/>}
                        handleClick={handleCloseDialog}
                    />
                </Box>
                <DialogTitle sx={style.dialogTitle}>
                    {selectedProperty?.name}
                    {renderButton(selectedProperty?.id, style.buttonDialog)}
                </DialogTitle>
                <DialogContent>
                    {selectedProperty && (
                        <CardMedia
                            component="img"
                            image={selectedProperty.images[0]}
                            alt={selectedProperty.name}
                            sx={style.imageDialog}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};
