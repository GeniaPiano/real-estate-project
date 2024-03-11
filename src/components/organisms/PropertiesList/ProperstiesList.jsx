import { useState, useEffect } from 'react'
import { Stack, Button, IconButton, Box, Card, CardContent, CardMedia, CardActions, Typography, Grid } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite' 
import axios from 'axios'
import { useTheme } from '@mui/material/styles'
import { useImageWidth } from '../../../hooks/useImageWidth/useImageWidth'
import { propertyStyle } from '../PropertiesList/propertyStyle'
import './PropertiesList.css'

export const PropertiesList = () => {
  const [properties, setProperties] = useState([])
  const theme = useTheme()
  const width = useImageWidth()
  const getPropertiesData = async () => {
    const propertiesFromApi = await axios.get('./../data/db.json')
    setProperties(propertiesFromApi.data.properties)
  }
  const style = propertyStyle(theme, width)

  useEffect(() => {
    getPropertiesData()
  }, [])
  return <Grid container spacing={4} marginTop={1}>
    {properties && properties.map((el) => 
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
               <Button size="small" variant="contained" sx={style.button}>
                  View more
                </Button>
            </Box>  
           </CardContent>      
          </Card>
      </Grid>)}
   </Grid>
}
