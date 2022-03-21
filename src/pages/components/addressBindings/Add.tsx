import { Link, useHistory } from "react-router-dom"
import { Breadcrumbs, Typography } from "@material-ui/core"
import { NavigateNextOutlined } from "@material-ui/icons"
import { AddressBindingDetails } from "./common/AddressBindingDetails"
import PageHeader from "../../../components/common/PageHeader"
import { useAddressBindings } from "../../../queries/useAddressBindings"
import { useEffect } from "react"

const Nav = () => {
    return (
      <Breadcrumbs separator={<NavigateNextOutlined fontSize="small" />} aria-label="breadcrumb">
        <Link color="primary" to="/" >
          <Typography color="primary">Home</Typography>
        </Link>
        <Link color="primary" to="/bindings" >
          <Typography color="primary">Bindings</Typography>
        </Link>
        <Typography color="inherit">New</Typography>
      </Breadcrumbs>
    )
}


const AddAddressBinding = () => {
  
  const { addAddressBinding, isAdded } = useAddressBindings();
  const history = useHistory();

  const handleAddBinding = (formData: any) => {
    addAddressBinding(formData);
  }

  useEffect(() => {
    if (isAdded) {
      history.push("/bindings");
    }
  }, [isAdded])

  
  return (
    <>
      <Nav/>
      <PageHeader title="New Address Binding" description="Bind Shipper Information to Address, can bind up to 5 adress information. "/>
      <AddressBindingDetails mode="Add" handleAdd={handleAddBinding}/>
    </>
  )
}

export { AddAddressBinding }