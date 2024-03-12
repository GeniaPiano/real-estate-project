import { Typography, Box, Grid } from '@mui/material'
import { useParams } from 'react-router'
import { TitlePage } from '../../components/atoms/TitlePage/TitlePage'
import { useProperty } from '../../hooks/useProperty/useProperty'
import { useTheme } from '@mui/material/styles'

export const PropertyPage = () => {
const {id} = useParams()
const theme = useTheme()
const property = useProperty(id)
if (!property) return <p>Loading...</p>

const style = {
  name: {
    fontSize: '20px', 
    fontWeight: 'bold'
  },
  price: {
    fontSize: '18px'
  },
  city: {
    fontSize: '16px'
  },
  surface: {
    fontSize: '16px'
  },
  description: {
    fontSize: '16px',
   }
}

const propertyData = [
  {
    label: 'Title',
    value: property.name,
    style: style.name
  },
  {
    label: 'Price',
    value: `${property.price} PLN`,
    style: style.price
  },
  {
    label: 'City',
    value: property.city,
    style: style.city
  },
  {
    label: 'Surface',
    value: `${property.surface} m2`,
    style: style.surface
  },
  {
    label: 'Description',
    value: property.description,
    style: style.description
  }
]

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <TitlePage title="Property Details"/>
      <Grid 
          padding={1}  
          container 
          spacing={4} 
          sx={{
            border: `${theme.palette.divider} 1px solid`, 
            width: '100%', 
            margin: 0, 
            }} 
          >
          <Grid item xs={3}>
            <Grid container spacing={2} direction="row" sx={{backgroundColor: theme.palette.grey[200], padding: '10px'}}>
                {propertyData.map(({label, value}) => (
                    <Grid item xs={12} sm={12}  key={label} >
                        <Box direction="row" key={label}>
                          <Typography variant="body2">{label}</Typography>
                          <Typography variant="body1" align='justify' sx={style}>{value}</Typography>
                        </Box>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          <Grid item xs={8}>
            {property.images}
          </Grid>
      </Grid>
    </Box>
  )
}