import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function MainLayout({ title, menus, children }) {

    const SMainContainer = css`
        display: flex;
    `;

        const SSidebar = css`
        width: 300px;
        background-color: #ddd;
    `;

    const SContentContainer = css`
        flex-grow: 1;
        height: 700px;
        background-color: #aaa;
    `;

    // const testMenu = [ 1, 2, 3, 4 ];
    // const testMenusMap = testMenu.map((menu) => <li>{menu}</li>);
    // === const testMenusMap2 = [ <li>1</li>, <li>1</li>, <li>1</li>, <li>1</li> ];

    return (
        <>
          <h1>{title}</h1>
          <div css={SMainContainer}>
            <ul css={SSidebar}>
              {menus.map((menu) => <li key={menu.id} >{menu.name}</li>)}
            </ul>
            <div css={SContentContainer}>
                {children}
            </div>
          </div>
        </>             
    );
}

export default MainLayout;