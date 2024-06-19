import React, { useState } from 'react';

export const SearchInput: React.FC<{ handleSearchKey: any }> = (props) => {
    const [valueSearch, setValueSearch] = useState('');

    return (
        <div className="tg-widget tg-widgetsearch">
            <form className="tg-formtheme tg-formsearch">
                <div className="form-group">
                    <button
                        type="button"
                        onClick={() => {
                            props.handleSearchKey(valueSearch);
                            setValueSearch('');
                        }}
                    >
                        <i className="icon-magnifier" />
                    </button>
                    <input
                        type="search"
                        name="search"
                        className="form-group"
                        value={valueSearch}
                        onChange={(e: any) => setValueSearch(e.target.value)}
                        placeholder="Search by title, author, key..."
                    />
                </div>
            </form>
        </div>
    );
};
