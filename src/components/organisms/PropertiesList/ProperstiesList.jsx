import { useNavigate } from 'react-router'
import { useState } from 'react'
import { Stack, Button, IconButton, Box, Card, CardContent, CardMedia, CardActions, Typography, Grid } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite' 
import { useTheme } from '@mui/material/styles'
import { useImageWidth } from '../../../hooks/useImageWidth/useImageWidth'
import { propertyStyle } from '../PropertiesList/propertyStyle'
import { useProperties } from '../../../hooks/useProperties/useProperties'
import { Pagination } from '../../molecules/Pagination/Pagination'
import './PropertiesList.css'

export const PropertiesList = () => {
  const theme = useTheme()
  const width = useImageWidth()
  const navigate = useNavigate()
  const style = propertyStyle(theme, width)
  const properties = useProperties()
  const PER_PAGE = 8
  const [page, setPage] = useState(1)
  const startIndex = (page - 1) * PER_PAGE
  const paginatedProperties = properties.slice(startIndex, startIndex + PER_PAGE)

  const handleNavigateToProperty = (id) => {
    navigate(`/property/${id}`)
  }

  return (
    <>
      <Pagination
        total={properties.length}
        perPage={PER_PAGE}
        currentPage={page}
        onPageChange={setPage}  
      />
      <Grid container spacing={2} marginTop={1}>
        {properties && paginatedProperties.map((el) => 
          <Grid item key={el.id} xs={12} sm={6} md={6} lg={3}>
            <Card sx={{height: "100%"}}>
              <CardContent>
                <Typography sx={style.title}> {el.name} </Typography>
                  <Box sx={style.imageIconsWrapper}>
                    <Box sx={style.imageWrapper}>
                      <CardMedia
                          image={el.images[0]}
                          alt={el.name} 
                          sx={style.image}
                        />
                    </Box>
                      <Stack >
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon color="primary" aria-label="heart" />
                        </IconButton>
                        <IconButton color="primary" aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </Stack>
                    </Box>
                <Typography className="description" variant="body2" > {el.description} </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography sx={style.city}> {el.city} </Typography>
                    <Typography sx={style.price}> {`${el.price}  PLN`} </Typography>
                </Stack>
                  <Box sx={style.buttonWrapper}>
                  <Button
                      onClick={()=>{handleNavigateToProperty(el.id)}}
                      size="small"
                      variant="contained" 
                      sx={style.button}>
                      View more
                    </Button>
                </Box>  
              </CardContent>      
              </Card>
          </Grid>)}
      </Grid>
    </>
  )
}
