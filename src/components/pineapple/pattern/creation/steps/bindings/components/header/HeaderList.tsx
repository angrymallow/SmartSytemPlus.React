import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { EmptyHeaderImage } from "../../../../../../../../assets/icons";
import { ValueTypeEnum } from "../../../../../../../../types/enums/ValueTypeEnum";
import { IPatternBinding, IPatternBindingDto } from "../../../../../../../../types/interfaces";
import HeaderItem from "./HeaderItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: 'wrap',
      overflowY: "auto",
      overflowX: "hidden",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      maxHeight: "700px",
      paddingTop: "50px",
    },
  })
);

type HeaderListProps = {
  bindings: IPatternBindingDto[],
  onSelectBinding: (header: IPatternBindingDto) => void,
}

function HeaderList(props: HeaderListProps) {
  const { bindings, onSelectBinding } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {
        bindings.length <= 0 ?
        (
          <>
            <Typography variant="body2" align="center">
              Header list is currently empty
            </Typography>
            <EmptyHeaderImage />
          </>
        )
        : (
          bindings.map((binding) => (
            <HeaderItem valueType={ValueTypeEnum.fix} name={binding.headerName} id={binding.headerId} isSO={false} noAction={true} onEdit={() => {}} onRemove={() => {}}/>
          ))
        )
      }
    </div>
  )
}

export default HeaderList
