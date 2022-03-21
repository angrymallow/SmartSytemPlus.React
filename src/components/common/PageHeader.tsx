import { Box, Typography, Toolbar } from "@material-ui/core"

type PageHeaderProps = {
  title: string,
  description?: string,
}

const PageHeader = (props: PageHeaderProps) => {
  return(
    <>
      <Toolbar disableGutters>
          <Typography variant="h5">{props.title}</Typography>
        </Toolbar>
        <Box component="div" marginBottom="30px">
          <Typography variant="body1">{props.description}</Typography>
        </Box> 
    </>
  )
}


export default PageHeader