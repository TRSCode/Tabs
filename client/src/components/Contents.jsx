import React from 'react';

const Contents = (props) => {
    const { dataContent, currentTabIndex } = props;

    return (
        <div className="contentsBox">
            {dataContent[currentTabIndex].content}
        </div>
    )
}

export default Contents;