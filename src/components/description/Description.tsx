import { Typography } from '@material-ui/core'

type DescriptionProps = {
  description: string,
  caption?: string,
}
function Description(props: DescriptionProps){
  return (
    <div>
        <Typography variant="h6">Set Pineapple Uniform Name</Typography>
        <Typography variant="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eligendi veniam iure et dignissimos voluptatem aliquam repudiandae odit ut, amet perspiciatis, fuga temporibus autem!</Typography>
    </div>
  )
}

export default Description
