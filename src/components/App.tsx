import * as React from 'react';

// TODO - resolve issues with typescript and css modules
// import * as styles from './app.css';

type AppProps = { headerContent: string; }

const App = (props: AppProps) => (
    <div>
        <h1>
            {props.headerContent}
        </h1>
    </div>
);

// App.propTypes = {
//     headerContent: PropTypes.string,
// };

// App.defaultProps = {
//     headerContent: 'Hello',
// };

export default App;
