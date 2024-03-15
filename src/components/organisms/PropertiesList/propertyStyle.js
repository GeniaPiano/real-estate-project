export const propertyStyle = (theme, width) => {
  return {
    title: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    city: {
      color: theme.palette.secondary.grey,
      marginTop: "10px"
    },
    price: {
      color: theme.palette.primary.main,
      marginTop: "10px"
    },
    button: {
      textTransform: "none", 
      paddingY: "1px",
      paddingX: "10px",
      marginBottom: "10px",
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "flex-end"
    },
    buttonDialog: {
      marginTop: "5px",
    },
    image: {
      width: width, 
      height: 150,
      maxWidth: '100%',
      cursor: 'pointer'
    },
    imageIconsWrapper: {
      padding: "10px 0",
      display: "flex",
      justifyContent: "space-between"  
    },
    imageWrapper: {
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: "10px",
      padding: "5px",
      display: "flex",
      maxWidth: 300
    }
  }
}