export default {
    items: [
      {
        name: "Home",
        url: "/home",
        icon: "fa fa-home fa-lg mt-2"
      },
      {
        name: "Dashboard",
        url: "/dashboard",
        icon: "fa fa-home fa-lg mt-2"
      },
      {
        name: "Users",
        url: "/users",
        icon: "fa fa-address-book fa-lg mt-2",
        children: [{
            name: "List",
            url: "/users",  
            icon: "fa fa-pencil-square-o fa-lg mt-2"
          },
          {
            name: "Add",
            url: "/user/add",
            icon: "fa fa-pencil-square-o fa-lg mt-2"
          }
        ]
      },
      {
        name: "Error 404",
        url: "/error404",
        icon: "fa fa-home fa-lg mt-2"
      },
      {
        name: "++ Side Contents ++",
        url: "/testRedirection",
        icon: "fa fa-home fa-lg mt-2"
      },

    ]
}