import React from "react";

const BlogPage = () => {
  return (
    <div className=" w-[90%] mx-auto ">
      <h1 className="text-center text-5xl font-bold my-4">Blogs</h1>
      <div className="font-sans space-y-3 p-6 my-2">
        <h1 className=" font-semibold text-3xl">
          1.What is an access token and refresh token? How do they work and where should we store
          them on the client-side?
        </h1>
        <p className="text-justify">
          An <strong>access token</strong> is a token that is given to a client by an authorization
          server. The client then uses that token to access protected resources from the resource
          server. Access tokens usually have an expiration date and are short-lived. <br />
          <strong>Refresh tokens</strong> are used to get new access tokens. They are also issued by
          the authorization server and are associated with a user. Refresh tokens are usually
          long-lived and can be used to get new access tokens once the old ones have expired.
          <br />
          Refresh tokens are usually subject to strict storage requirements to ensure they are not
          leaked. Access tokens are usually stored in memory and are short-lived. Refresh tokens are
          usually stored in cookies or local storage and are long-lived. Access tokens are usually
          opaque and can be of any format. Refresh tokens are usually JWTs. Access tokens are sent
          to the resource server to access protected resources. Refresh tokens are sent to the
          authorization server to get new access tokens. Access tokens are usually self-contained.
          Refresh tokens are usually reference tokens. Access tokens are usually sent in the
          Authorization header using the Bearer schema. Refresh tokens are usually sent in cookies
          or in the body of the request. Access tokens are usually not encrypted. Refresh tokens are
          usually encrypted. Access tokens are usually not signed. Refresh tokens are usually
          signed. Access tokens are usually not revoked. Refresh tokens can be revoked. Access
          tokens are usually not rotated. Refresh tokens can be rotated. Access tokens are usually
          not issued with a client secret. Refresh tokens are usually issued with a client secret.
          Access tokens are usually issued with the client ID. Refresh tokens are usually issued
          with the client ID. Access tokens are usually issued with a scope. Refresh tokens are
          usually issued with a scope. Access tokens are usually issued with a grant type. Refresh
          tokens are usually issued with a grant type. Access tokens are usually issued with a
          redirect URI. Refresh tokens are usually issued with a redirect URI.
          <br />
          We should store them in httpOnly cookies. It's important to note that access and refresh
          tokens shouldn't be stored in local/session storage because they are not a place for
          sensitive data.
        </p>
      </div>
      <div className=" divider"></div>
      <div className="font-sans space-y-3 p-6 my-2">
        <h1 className=" font-semibold text-3xl">2.Compare SQL and NoSQL databases?</h1>
        <p className="text-justify">
          <li>SQL databases are relational, NoSQL are non-relational.</li>
          <li>
            SQL databases use structured query language and have a predefined schema. NoSQL
            databases have dynamic schemas for unstructured data.
          </li>
          <li>SQL databases are vertically scalable, NoSQL databases are horizontally scalable.</li>
          <li>
            SQL databases are table based, while NoSQL databases are document, key-value, graph or
            wide-column stores.
          </li>
          <li>
            SQL databases are better for multi-row transactions, NoSQL are better for unstructured
            data like documents or JSON.
          </li>
          <li>
            SQL databases are not best fit for hierarchical data storage, NoSQL database fits better
            for the hierarchical data storage.
          </li>
          <li>
            SQL databases are good for the complex query intensive environment, NoSQL databases are
            not good for complex queries.
          </li>
          <li>
            SQL databases are not designed to handle large amounts of unstructured data, NoSQL
            databases are designed to handle large amounts of data.
          </li>
        </p>
      </div>
      <div className=" divider"></div>
      <div className="font-sans space-y-3 p-6 my-2">
        <h1 className=" font-semibold text-3xl">3.What is express js? What is Nest JS?</h1>
        <p className="text-justify">
          <strong>Express</strong> is a minimal and flexible Node.js web application framework that
          provides a robust set of features for web and mobile applications. It is an open-source
          framework developed and maintained by the Node.js foundation. Express is used to build the
          web server that Node.js lacks. Express is the backend part of the MEAN stack, together
          with MongoDB database and AngularJS frontend framework. Express is a lightweight framework
          used to build web applications in Node. It provides a number of robust features for
          building single and multi-page web applications. Express is inspired by the popular Ruby
          framework, Sinatra.
          <br />
          <strong>NestJS</strong> is a framework for building efficient, scalable Node.js web
          applications. It uses modern JavaScript, is built with TypeScript and combines elements of
          OOP (Object Oriented Progamming), FP (Functional Programming), and FRP (Functional
          Reactive Programming). Under the hood, Nest makes use of Express, but also, provides
          compatibility with a wide range of other libraries, like e.g. Fastify, allowing for easy
          use of the myriad third-party plugins which are available. Nest provides a level of
          abstraction above these common Node.js frameworks (Express/Fastify), but also exposes
          their APIs directly to the developer. This allows developers the freedom to use the myriad
          of third-party modules which are available for the underlying platform.
        </p>
      </div>
      <div className=" divider"></div>
      <div className="font-sans space-y-3 p-6 my-2">
        <h1 className=" font-semibold text-3xl">
          4.What is MongoDB aggregate and how does it work?
        </h1>
        <p className="text-justify">
          <strong>Aggregation</strong> operations process data records and return computed results.
          Aggregation operations group values from multiple documents together, and can perform a
          variety of operations on the grouped data to return a single result. MongoDB provides
          three ways to perform aggregation:
          <li> the aggregation pipeline</li> <li>the map-reduce function</li>
          <li>single purpose aggregation methods.</li>
          <br />
          <strong>Aggregation Pipeline</strong> is a framework for data aggregation modeled on the
          concept of data processing pipelines. Documents enter a multi-stage pipeline that
          transforms the documents into an aggregated result.
          <br />
          <strong>Map-Reduce</strong> is a data processing paradigm for condensing large volumes of
          data into useful aggregated results. MongoDB uses map-reduce to perform aggregation
          operations.
          <br />
          <strong>Single Purpose Aggregation Operations</strong> provide a simple interface for
          group, count, and computing statistics for subsets of documents in a collection.
          <br />
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
