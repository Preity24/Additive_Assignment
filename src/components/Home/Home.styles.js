import Autocomplete from "@material-ui/lab/Autocomplete";

const styles = theme => ({
  formContainer: {
    display: 'flex',
    marginTop: theme.spacing(2),
    '& .MuiAutocomplete-root': {
      width: '300px',
    }
  },
  searchBtn: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(1),
  }

})

export default styles;
  