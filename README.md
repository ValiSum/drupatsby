<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.docker.com">
    <img alt="Docker" src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png" width="80" />
  </a>
  <img alt="Plus" src="https://image.flaticon.com/icons/svg/1237/1237946.svg" width="40" />
  <a href="https://www.drupal.org">
    <img alt="Drupal" src="https://www.drupal.org/files/druplicon-small.png" width="55" />
  </a>
  <img alt="Plus" src="https://image.flaticon.com/icons/svg/1237/1237946.svg" width="40" />
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Drupatsby (Docker + Drupal + Gatsby)
</h1>

This repository contains a basic structure of a Docker + Drupal + Gatsby project

## 🚀 Quick start

1.  **Clone the repository on your PC**

    ```shell
    # Clone with SSH
    git clone git@github.com:ValiSum/drupatsby.git
    # Clone with HTTPS
    git clone https://github.com/ValiSum/drupatsby.git
    ```

2.  **Add `drupatsby.local` and `app.drupatsby.local` in your hosts file.**

    ```shell
    # hosts file
    127.0.0.1   drupatsby.local
    127.0.0.1   app.drupatsby.local
    ```

3.  **Install the project**

    Navigate into drupatsby directory and create the docker containers and install the dependencies.

    ```shell
    cd drupatsby/
    make install
    ```

4.  **Start the backend server.**

    ```shell
    make start
    ```

    Your Drupal site is now running at `http://drupatsby.local`!
    The credentials to access to the admin panel are the next:

    ```shell
    user: admin
    password: admin
    ```

5.  **Start the frontend server.**

    ```shell
    make gatsby
    ```

    Your Gatsby site is now running at `http://app.drupatsby.local`!

    _Note: You'll also see a second link: _`http://app.drupatsby.local/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## Add `styled-components` library

COMING SOON

## Add `docz` library

COMING SOON

## Add `cypress` library

COMING SOON

<!-- AUTO-GENERATED-CONTENT:END -->
