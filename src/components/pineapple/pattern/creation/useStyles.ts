
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { colors } from "../../../../themes/variables";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    groupContainer: {
      backgroundColor: colors.background,
      height: "auto",
      display: "flex",
      padding: theme.spacing(3),
      flexDirection: "column",
      justifyContent: "center",
    },
    headerItemsContainer: {
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      overflowX: "hidden",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      maxHeight: "700px",
      paddingTop: "50px",
    },
    headerItem: {
      backgroundColor: colors.primaryLight,
      height: "42px",
      borderRadius: "5px",
      display: "flex",
      padding: "15px",
      alignItems: "center",
      "& > *": {
        marginRight: "5px",
      },
      "&:hover button": {
        display: "flex",
      },
      marginBottom: "10px",
    },
    indicator: {
      height: "10px",
      width: "10px",
      borderRadius: "50%",
      border: "2px solid",
      borderColor: colors.primary,
    },
    headerEditIcon: {
      height: "5px",
      display: "none",
    },
  })
);

export default useStyles;