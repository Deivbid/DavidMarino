import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
// Redux
import { connect } from 'react-redux';
import { updateInputMessage, isNew } from "../../actions";
// Styles
import { styles } from './styles';
// Data
import Data from '../../mock_data/MOCK_DATA.json';


const suggestionss =  Data.map(item => { return {label: `${item.firstName} ${item.lastName}`} })

const renderInputComponent = (inputProps) => {
  const { classes, name, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      className={classes.margin}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
      label="Nombre"
      variant="outlined"
      id="custom-css-outlined-input"
      {...other}
    />      
  );
}

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          ),
        )}
      </div>
    </MenuItem>
  );
}

const getSuggestions = (value) => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestionss.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

const getSuggestionValue = (suggestion) => {
  return suggestion.label;
}

class IntegrationAutosuggest extends React.Component {
  state = {
    suggestions: [],
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    const { setNew } = this.props;
    setNew(false)
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

   handleChange = name => (event, { newValue }) => {
    const { updateMesssage } = this.props;
    updateMesssage(name, newValue);
  };


  render() {
    const { classes, newie, name } = this.props;
    const { suggestions } = this.state;

    let text = name;
    const autosuggestProps = {
      renderInputComponent,
      suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion,
    };

    if(newie){
      text = '';
    }

    return (
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            isNew,
            name,
            placeholder: 'Nombre',
            value: text,
            onChange: this.handleChange('name'),
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state) => {
  return {
    name: state.message.mName,
    newie: state.isNew
  };
}

const mapDispatchToProps = {
  updateMesssage:updateInputMessage,
  setNew: isNew
}

const AutoComplete = withStyles(styles)(IntegrationAutosuggest);
export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);