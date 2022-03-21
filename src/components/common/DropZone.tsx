import { Box, Button, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { colors } from "../../themes/variables";
import { ExcelIcon } from "../../assets/icons";

type DropZoneProps = {
  handleSelectFile: Function,
  file: object,
  type: "button" | "box",
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    dropZone: {
        border: "1px solid #E0E0E0",
        backgroundColor: "#FAFAFA",
        height: "60px",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(5),
        cursor: "pointer",
      },
    dropZoneActive: {
      backgroundColor: colors.primaryLight,
      border: "1px solid",
      borderColor: colors.primary,
    },
    fileInfo: {
      "& > *": {
        marginRight: "15px",
      },
    },
  })
});


const DropZone = (props: any) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((e: any) => {
      props.handleSelectFile(e);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/vnd.ms-excel.sheet.binary.macroEnabled.12,application/vnd.ms-excel.sheet.macroEnabled.12 ",
    maxFiles: 1,
  });

  if (props.type === "button") {
    return (
      <>
        <div {...getRootProps()} style={{width: "100%", display: "flex"}}>
          <input {...getInputProps()}></input>
          <Button color="primary" variant="outlined">Select a file</Button>
          <Box marginLeft="15px" display="flex" alignItems="center">
            {props?.file?.name ? <ExcelIcon height="20px"/> : null}
            <Typography variant="body1" color="primary">{props.file?.name}</Typography>
          </Box>
        </div>
      </>)
  }
  return (<h1>No selected type</h1>)
}

export default DropZone;