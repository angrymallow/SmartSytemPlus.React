import {  Typography } from "@material-ui/core";


const LabeledText = (props: any) => {
  const { label, text } = props;
  return (
    <div>
      <Typography variant="caption">{label}</Typography>
      <Typography variant="body1">{text}</Typography>
    </div>
  );
};

export default LabeledText;
