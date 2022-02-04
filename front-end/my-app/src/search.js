import { IconButton, TextField} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React, { useState } from "react";
import { withRouter } from 'react-router';

const SearchBar = (props) => {
    function getCategorySlug(name) {
        return name
          .split(' ')
          .map(encodeURIComponent)
          .join('+');
    }

    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              search: content,
            })
          };
        fetch("http://127.0.0.1:8000/api/searches/", requestOptions)
        e.preventdefault()
    };

  return (
        <form className='form' onSubmit={handleSubmit}>
            <TextField
                id="search-bar"
                placeholder= "How can we help?"
                value={content}
                onInput={ e=>setContent(e.target.value)}
                style={{width:"100%"}}
                InputProps={{
                    endAdornment: (
                    <IconButton type="submit">
                        <SearchOutlined />
                    </IconButton>
                    ),
                }}
                variant="outlined"
            />
        </form>
  );
}

export default SearchBar;