import React, { useState } from 'react';
// import './Dropdowns.css'; // Import CSS file for styling

// Dropdown data
const dropdownList = {
    "Feature-dropdown": {
        "Boundaries": {
            "Admin Boundaries": [
                'District', 'Gram Panchayat', 'Hobli', 'State', 'Taluk', 'Town', 'Village', 'Ward'
            ],
            "Constituency Boundaries": [
                'Assembly Constituency', 'Parliament Constituency', 'Polling Station', 'Polling Station Boundary'
            ]
        },
        "Asset Registery": {},
        "Groundwater Status": {},
        "Roads": {},
        "Settlements": {},
        "Slope": {},
        "Soil": {},
        "Water Bodies": {},
        "Waterspread": {},
    },
    "Topographical-dropdown": {
        "Topography": ["Mountain", "Valley", "Plain", "Plateau"]
    },
    "Geological-dropdown": {
        "Geology": ["Rock Type", "Soil Composition"]
    },
    "Meterological-dropdown": {
        "Weather": ["Temperature", "Precipitation", "Humidity"]
    },
    "ManMade-dropdown": {
        "Structures": ["Buildings", "Bridges", "Roads"]
    },
    "Indices-dropdown": {
        "Indices": ["Vegetation Index", "Moisture Index"]
    }
};

const Dropdowns = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubCategory, setOpenSubCategory] = useState(null);
    const [openNestedCategory, setOpenNestedCategory] = useState(null);
    const [dropdownData, setDropdownData] = useState({});
    const [selectedItems, setSelectedItems] = useState({});

    const handleDropdownChange = (dropdownKey) => {
        setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey);
        setOpenSubCategory(null); // Reset sub-category when changing main dropdown
        setOpenNestedCategory(null); // Reset nested category
        setDropdownData(dropdownList[dropdownKey] || {});
    };

    const handleSubCategoryClick = (subCategory) => {
        setOpenSubCategory(openSubCategory === subCategory ? null : subCategory);
    };

    const handleNestedCategoryClick = (nestedCategory) => {
        setOpenNestedCategory(openNestedCategory === nestedCategory ? null : nestedCategory);
    };

    const handleItemChange = (category, subCategory, item) => {
        const key = `${category}-${subCategory}-${item}`;
        setSelectedItems(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    return (
        <div className='dropdown-wrapper'>
            {Object.keys(dropdownList).map((dropdownKey) => (
                <div key={dropdownKey} className='dropdown'>
                    <button onClick={() => handleDropdownChange(dropdownKey)}>
                        {dropdownKey.replace('-dropdown', '')}
                        <span className={`icon ${openDropdown === dropdownKey ? 'open' : 'closed'}`}>
                            {openDropdown === dropdownKey ? '▼' : '+'}
                        </span>
                    </button>

                    {openDropdown === dropdownKey && (
                        <div className='dropdown-content'>
                            {Object.keys(dropdownData).length > 0 ? (
                                <ul>
                                    {Object.keys(dropdownData).map((category) => (
                                        <li key={category}>
                                            <button onClick={() => handleSubCategoryClick(category)}>
                                                {category}
                                                <span className={`icon ${openSubCategory === category ? 'open' : 'closed'}`}>
                                                    {openSubCategory === category ? '▼' : '+'}
                                                </span>
                                            </button>

                                            {openSubCategory === category && (
                                                <ul className='sub-dropdown'>
                                                    {typeof dropdownData[category] === 'object' && !Array.isArray(dropdownData[category]) ? (
                                                        Object.keys(dropdownData[category]).map((subCategory) => (
                                                            <li key={subCategory}>
                                                                <button onClick={() => handleNestedCategoryClick(subCategory)}>
                                                                    {subCategory}
                                                                    <span className={`icon ${openNestedCategory === subCategory ? 'open' : 'closed'}`}>
                                                                        {openNestedCategory === subCategory ? '▼' : '+'}
                                                                    </span>
                                                                </button>

                                                                {openNestedCategory === subCategory && (
                                                                    <ul className='item-list'>
                                                                        {dropdownData[category][subCategory].map((item, index) => (
                                                                            <li key={index}>
                                                                                <label>
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        checked={!!selectedItems[`${category}-${subCategory}-${item}`]}
                                                                                        onChange={() => handleItemChange(category, subCategory, item)}
                                                                                    />
                                                                                    {item}
                                                                                </label>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <ul className='item-list'>
                                                            {dropdownData[category].map((item, index) => (
                                                                <li key={index}>
                                                                    <label>
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={!!selectedItems[`${category}-${item}`]}
                                                                            onChange={() => handleItemChange(category, null, item)}
                                                                        />
                                                                        {item}
                                                                    </label>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No data available</p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Dropdowns;