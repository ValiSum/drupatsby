<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.docker.com">
    <img alt="Docker" src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png" width="80" />
  </a>
  <img alt="Plus" src="https://image.flaticon.com/icons/svg/1237/1237946.svg" width="30" />
  <a href="https://www.drupal.org">
    <img alt="Drupal" src="https://www.drupal.org/files/druplicon-small.png" width="55" />
  </a>
  <img alt="Plus" src="https://image.flaticon.com/icons/svg/1237/1237946.svg" width="30" />
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

2.  **Install composer files (/vendor).**

    Navigate into drupatsby directory and install the vendor folder.

    ```shell
    cd drupatsby/
    composer install
    ```

3.  **Add `drupatsby.local` and `app.drupatsby.local` in your hosts file.**

    ```shell
    # hosts file
    127.0.0.1   drupatsby.local
    127.0.0.1   app.drupatsby.local
    ```

4.  **Up the docker containers.**

    ```shell
    docker-compose up -d
    ```

5.  **Open the source code and start editing!**

    Your Drupal site is now running at `http://drupatsby.local`!
    The credentials for access to the admin are:

    ```shell
    user: admin
    password: admin
    ```

    Your Gatsby site is now running at `http://app.drupatsby.local`!

    _Note: You'll also see a second link: _`http://app.drupatsby.local/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

<!-- AUTO-GENERATED-CONTENT:END -->
