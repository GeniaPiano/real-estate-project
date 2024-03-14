export const propertyStyle = (theme, width) => {
  return {
    title: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    type: {
      color: theme.palette.secondary.greyDark,
    },
    city: {
      color: theme.palette.secondary.main,
      fontWeight: "bold"
    },
    price: {
      color: theme.palette.primary.main,
    },
    button: {
      borderRadius: "20px", 
      textTransform: "none", 
      paddingY: "1px",
      paddingX: "10px",
      marginBottom: "10px",
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "flex-end"
    },
    image: {
      width: width, 
      height: 150,
      maxWidth: '100%'
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