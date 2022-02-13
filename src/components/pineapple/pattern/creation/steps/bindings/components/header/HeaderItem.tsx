import { makeStyles, Theme, createStyles, Typography, IconButton } from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { colors } from "../../../../../../../../themes/variables";
import { ValueTypeEnum } from "../../../../../../../../types/enums/ValueTypeEnum";

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


type HeaderItemProps = {
  id: number,
  name: string,
  isSO: boolean,
  valueType: ValueTypeEnum,
  noAction: boolean,
  onEdit: (id: number) => void,
  onRemove: (id: number) => void,
}

const HeaderItem = (props: HeaderItemProps) => {
  const { id, name, isSO, valueType, noAction, onEdit, onRemove } = props;
  const classes = useStyles();

  const handleEditHeader = () => {
    onEdit(id);
  };

  const handleRemoveHeader = () => {
    onRemove(id);
  };

  return (
    <div className={classes.container}>
      <div className={classes.indicator}></div>
      <Typography variant="body2" color="primary">
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {valueType === ValueTypeEnum.fix ? "Fix" : "Changing"}
      </Typography>
      {isSO ? (
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