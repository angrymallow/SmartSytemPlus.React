import { makeStyles, Theme, createStyles, Typography, IconButton } from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { colors } from "../../../../../themes/variables";
import { ValueTypeEnum } from "../../../../../types/enums/ValueTypeEnum";
import { PatternBindings } from "../../../../../types/interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
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
    editIcon: {
      height: "5px",
      display: "none",
    },
  })
);


const HeaderItem = (props: any) => {
  const classes = useStyles();
  const { binding, onEdit, onRemove, noAction }: { binding: PatternBindings; onEdit: Function; onRemove: Function; noAction: boolean } = props;

  const handleEditHeader = () => {
    onEdit(binding.headerId);
  };

  const handleRemoveHeader = () => {
    onRemove(binding.headerId);
  };

  return (
    <div className={classes.container}>
      <div className={classes.indicator}></div>
      <Typography variant="body2" color="primary">
        {binding.header.name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {binding.option.valueType === ValueTypeEnum.fix ? "Fix" : "Changing"}
      </Typography>
      {binding.option.isSO ? (
        <div style={{backgroundColor: "white", paddingLeft: "5px", paddingRight: "5px",  borderRadius: "5px"}}>
          <Typography variant="body2" color="secondary">
            S/O
          </Typography>
        </div>
      ) : null}
      {noAction ? null : (
        <>
          <IconButton className={classes.editIcon} size="small" onClick={handleEditHeader}>
            <EditOutlined color="inherit" />
          </IconButton>
          <IconButton className={classes.editIcon} size="small" onClick={handleRemoveHeader}>
            <DeleteOutlined color="error" />
          </IconButton>
        </>
      )}
    </div>
  );
};


export default HeaderItem;