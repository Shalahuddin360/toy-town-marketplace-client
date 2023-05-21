

const Blog = () => {
    return (
        <div>
           <h2 className="font-extrabold text-3xl text-center mb-5 text-yellow-600 ">Blog Section</h2>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p><b>what is token:</b> Tokens are pieces of data that carry just enough information to facilitate the process of determining a users identity or authorizing a user to perform an action</p> <br />
                    <p> <b>Token Types</b> : 1. ID token 2.access token 3.refresh token</p> <br />
                    <p> <b>refresh token :</b> As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. </p> <br />
                    <p> <b>access token :</b> a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server</p> <br />
                <strong>How do they work and where should we store them on the client-side ?</strong>
                  <p>Elsewhere in the MDN learning area, we talked about the difference between static sites and dynamic sites. Most major modern websites are dynamic — they store data on the server using some kind of database (server-side storage), then run server-side code to retrieve needed data, insert it into static page templates, and serve the resulting HTML to the client to be displayed by the users browser.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2.Compare SQL and NoSQL databases ?
                </div>
                <div className="collapse-content">
                    <strong>The five critical differences between SQL and NoSQL are:</strong>
                    <p><b>A: </b> SQL databases are relational, and NoSQL databases are non-relational.</p> <br />
                    <p><b>B: </b>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p> <br />

                    <p><b>C: </b>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p> <br />

                    <p><b>C: </b>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. </p> <br />

                    <p><b>C: </b>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p> <br />

                    
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3.What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <strong>What is Next JS js?</strong>
                    <p><b>A: </b> NestJS is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications.</p> <br />
                    <p><b>B: </b>It is built on top of Express.js and provides a more structured way of building applications with TypeScript..</p> <br />

                    <p><b>C: </b>NestJS uses a modular architecture, making it easy to maintain and scale applications as they grow.</p> <br /> <br />

                    <strong>What is express JS js?</strong>
                    <p><b>A: </b>Express is a minimal and flexible Node.js framework that provides a robust set of features for building web and mobile applications. </p> <br />

                    <p><b>B: </b>It is a lightweight and unopinionated framework that allows developers to create applications with their preferred tools and libraries.</p> <br />

                    
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4.What is MongoDB aggregate and how does it work
                </div>
                <div className="collapse-content">
                    <strong>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline</strong>
                </div>
            </div>


        </div>
    );
};

export default Blog;