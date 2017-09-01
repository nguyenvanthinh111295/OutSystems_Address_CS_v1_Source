<%@ Import namespace="System.Net" %>
<%@ Page language="c#" AutoEventWireup="true" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<html>
    <head>
        <title>No defined entry point</title>
        <META NAME="ROBOTS" CONTENT="NOINDEX"/>
        <script runat="server">
		            private void Page_Load(object sender, System.EventArgs e) {
		                Response.StatusCode = 404;
		            }
		            override protected void OnInit(EventArgs e) {
			            InitializeComponent();
			            base.OnInit(e);
		            }
		            private void InitializeComponent() {    
			            this.Load += new System.EventHandler(this.Page_Load);
		            }
        </script>
    </head>
    <body>Wrong URL address - this module does not contain a default entry.</body>
</html>
