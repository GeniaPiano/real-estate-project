import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import {
  Stack,
  Button,
  IconButton,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useTheme } from '@mui/material/styles'
import { LoadingSpinner } from '../../atoms/LoadingSpinner/LoadingSpinner'
import { useImageWidth } from '../../../hooks/useImageWidth/useImageWidth'
import { propertyStyle } from '../PropertiesList/propertyStyle'
import { usePropertiesStore } from '../../../stores/usePropertiesStore'
import { Pagination } from '../../molecules/Pagination/Pagination'
import { NotFoundProperties } from '../../atoms/NotFoundProperties/NotFoundProperties'
import { useMediaQuery } from '@mui/material'
import './PropertiesList.css'

export const PropertiesList = () => {
  const theme = useTheme()
  const width = useImageWidth()
  const navigate = useNavigate()
  const style = propertyStyle(theme, width)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { properties, fetchProperties, isLoading, filteredProperties } = usePropertiesStore()
  const PER_PAGE = 8
  const [page, setPage] = useState(1)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const startIndex = (page - 1) * PER_PAGE
  const paginatedProperties = filteredProperties ? filteredProperties.slice(startIndex, startIndex + PER_PAGE) : []

  const handleNavigateToProperty = (id) => {
    navigate(`/property/${id}`)
  }

  const renderButton = (id, style) => 
      <Button
          onClick={() => {
            handleNavigateToProperty(id)
          }}
          size="small"
          variant="contained"
          sx={style || style.button}
        >
          View more
      </Button>

  const handleOpenDialog = (property) => {
    setSelectedProperty(property)
    setIsOpenDialog(true)
    console.log(selectedProperty)
  }

  const handleCloseDialog = () => {
    setIsOpenDialog(false)
    setSelectedProperty(null)
  }

  useEffect(() => {
    fetchProperties()
  }, [fetchProperties])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <>
      {filteredProperties && filteredProperties.length === 0 && (
        <NotFoundProperties message="No properties found, change your search criteria." />
      )}
      <Pagination
        total={filteredProperties ? filteredProperties.length : 0}
        perPage={PER_PAGE}
        currentPage={page}
        onPageChange={setPage}
      />
      <Grid container spacing={2} marginTop={1}>
        {properties &&
          paginatedProperties.map((el) => (
            <Grid item key={el.id} xs={12} sm={6} md={6} lg={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography sx={style.title}> {el.name} </Typography>
                  <Box sx={style.imageIconsWrapper}>
                    <Box sx={style.imageWrapper}>
                      <CardMedia
                        image={el.images[0]}
                        alt={el.name}
                        sx={style.image}
                        onClick={()=>handleOpenDialog(el)}
                      />
                    </Box>
                    <Stack>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon color="primary" aria-label="heart" />
                      </IconButton>
                      <IconButton color="primary" aria-label="share">
                        <ShareIcon />
                      </IconButton>
                    </Stack>
                  </Box>
                  <Typography className="description" variant="body2">
                    {el.description}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography sx={style.city}> {el.city} </Typography>
                    <Typography sx={style.price}> {`${el.price}  PLN`} </Typography>
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
           <DialogTitle as={Stack} sx={{textAlign: 'center'}} >
            {selectedProperty?.name}  
            {renderButton(selectedProperty?.id, style.buttonDialog)}
           </DialogTitle>
         <DialogContent>
          {selectedProperty && (
              <CardMedia
                component="img"
                image={selectedProperty.images[0]}
                alt={selectedProperty.name}
              />
            )}
        </DialogContent>
      </Dialog>

    </>
  )
}
