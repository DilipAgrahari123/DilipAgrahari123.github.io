

    function Notefun() {
        var maxLength = 255;
        var textlen = maxLength - $("#NotesID").val().length;
        $('#rchars').text(textlen);
    }
    function SubmitAllTheDetails() {
        var Filepath = $("#filePDF").val();
        var Client = $("#ClientName").val();
        var SiteName = $("#SiteNameID").val();
        var SiteLocation = $("#SiteLocationID").val();
        var AssetId = $("#AssetID option:selected").text();
        var AssetType = $("#AssetTypeID").val();
        var Zone = $("#ZoneID").val();
        var DocumentType = $("#DocumentType").val();
        var DocumentTypeTextBox = $("#DocumentTypeID").val();
        var Date = $("#dateID").val();
        var Notes = $("#NotesID").val();
        var SiteNameId = $("#ClientName option:selected").text();
        var ClientNameId = $("#SiteNameID option:selected").text();
        if (Client == "" || Client == null || Client == undefined) {
        alert("Please provide a Client Name");
            $('#ClientNameValidID').text("Please provide a Client Name");
        } else if (Filepath == "" || Filepath == null || Filepath == undefined) {
        alert("Please provide a File Path");
            $('#filePDFValidID').text("Please provide a File Path");

        } else if (DocumentType == "" || DocumentType == null || DocumentType == undefined) {
        alert("Please provide a Document Type");
            $('#DocumentTypeValidID').text("Please provide a Document Type");

        } else if (Date == "" || Date == null || Date == undefined) {
        alert("Please provide a Date");
            $('#DateValidID').text("Please provide a Date");
        } else {
            if (DocumentType == "specify") {
                if (DocumentTypeTextBox == "" || DocumentTypeTextBox == null || DocumentTypeTextBox == undefined) {
        alert("Please provide a Document Type Name");
                    $('#DocumentTypeValidID').text("Please provide a Document Type Name");
                } else {
        $("#DisablePageId").css("pointer-events", "none");
                     var ModelClass = {
        "Filepath": Filepath,
                    "Client": Client,
                    "SiteName": SiteName,
                    "SiteLocation": SiteLocation,
                    "AssetId": AssetId,
                    "AssetType": AssetType,
                    "Zone": Zone,
                    "DocumentType": $("#DocumentType option:selected").text(),
                    "DocumentTypeTextBox": DocumentTypeTextBox,
                    "Date": Date,
                    "Notes": Notes,
                    "SiteNameId": SiteNameId,
                    "ClientNameId": ClientNameId
                };
                $.ajax({
        type: "POST",
                    url: "/home/UploadAddFunction",
                    data: {ModelClass: ModelClass },
                    success: function (message) {
        $("#DisablePageId").css("pointer-events", "auto");
                        console.log(message)
                        alert( message);
                        if (message==1) {
        window.location.href = "@Url.Action("List")";
                        } else {
        alert("Error :" + message);
                        }
                    },
                    error: function (e) {
        $("#DisablePageId").css("pointer-events", "auto");
                        alert("Error!" + e);
                    }
                });
                }

            } else {
        $("#DisablePageId").css("pointer-events", "none");
                var ModelClass = {
        "Filepath": Filepath,
                    "Client": Client,
                    "SiteName": SiteName,
                    "SiteLocation": SiteLocation,
                    "AssetId": AssetId,
                    "AssetType": AssetType,
                    "Zone": Zone,
                    "DocumentType": $("#DocumentType option:selected").text(),
                    "DocumentTypeTextBox": DocumentTypeTextBox,
                    "Date": Date,
                    "Notes": Notes,
                    "SiteNameId": SiteNameId,
                    "ClientNameId": ClientNameId
                };
                $.ajax({
        type: "POST",
                    url: "/home/UploadAddFunction",
                    data: {ModelClass: ModelClass },
                    success: function (message) {
        $("#DisablePageId").css("pointer-events", "auto");
                        console.log(message)
                        alert( message);
                        if (message==1) {
        window.location.href = "@Url.Action("List")";
                        } else {
        alert("Error :" + message);
                        }
                    },
                    error: function (e) {
        $("#DisablePageId").css("pointer-events", "auto");
                        alert("Error!" + e);
                    }
                });
            }
        }

    }
    function AddSpecific() {
        $("#DocumentTypeID").attr("hidden", true);
        var vd = $("#DocumentType").val();
        if (vd == "specify") {
        $("#DocumentTypeID").removeAttr("hidden");
        }
    }
    $(document).ready(function () {
        $.ajax({
            type: "POST",
            url: "/Home/GetDoctypeDetails",
            async: false,
            success: function (result) {
                for (var i = 0; i < result.length; i++) {
                    var newState = new Option(result[i].documentName, result[i].srNo, false, false);
                    $("#DocumentType").append(newState);
                }
            },
            error: function (result) {
                console.log(result);
            }
        });
    });
    function LoadDataAssetID() {
        if ($("#AssetID").val() != "" || $("#AssetID").val() != null || $("#AssetID").val() != undefined) {
        $.ajax({
            type: "POST",
            url: "/Home/LoadDataAssetID",
            data: { ID: $("#AssetID option:selected").text() },
            async: false,
            success: function (result) {
                $("#ZoneID").prop('disabled', false)
                $("#ZoneID").val(result.zone);
                $("#AssetTypeID").prop('disabled', false)
                $("#AssetTypeID").val(result.assetType);
            },
            error: function (result) {
                $("#ZoneID").prop('disabled', true)
                $("#AssetTypeID").prop('disabled', true)
                console.log(result);
            }
        });
        }
    }
    function LoadDataSiteLocation() {
        if ($("#SiteNameID").val() != "" || $("#SiteNameID").val() != null || $("#SiteNameID").val() != undefined) {
        $.ajax({
            type: "POST",
            url: "/Home/LoadDataSiteLocation",
            data: { ID: $("#SiteNameID").val() },
            async: false,
            success: function (result) {
                $("#SiteLocationID").prop('disabled', false)
                $("#SiteLocationID").val(result.location);
            },
            error: function (result) {
                $("#SiteLocationID").prop('disabled', true)
                console.log(result);
            }
        });
        }
    }
    function LoadDataSiteName() {
        if ($("#ClientName").val() != "" || $("#ClientName").val() != null || $("#ClientName").val() != undefined) {
        $("#SiteNameID").empty();
            var newState123 = new Option("Loading...", "", false, false);
            $("#SiteNameID").append(newState123);
            $.ajax({
        type: "POST",
                url: "/Home/GetSiteTBModel",
                data: {SiteNameID: $("#ClientName").val() },
                async: false,
                success: function (result) {
        $("#SiteNameID").empty();
                    $("#SiteNameID").prop('disabled', false)
                    if (result.length == 1) {
                        var newState = new Option(result[0].siteName, result[0].siteId, true, true);
                        $("#SiteNameID").append(newState);
                        LoadDataSiteLocation();
                    } else {
                        var newState1 = new Option("Select Site Name", "", true, true);
                        $("#SiteNameID").append(newState1);
                        for (var i = 0; i < result.length; {

                            var newState = new Option(result[i].siteName, result[i].siteId, false, false);
                            $("#SiteNameID").append(newState);
                        }
                    }
                },
                error: function (result) {
        $("#SiteNameID").empty();
                    console.log(result);
                }
            });
        }
    }
    function openDia() {
        $.ajax({
            type: "GET",
            url: "/home/Privacy",
            contentType: false,
            processData: false,
            success: function (message) {
                const frame = document.getElementById("PDFLoadId");
                frame.src = message;
            },
            error: function () {
                alert("There was error uploading files!");
            }
        });
    }
    function openDialog() {
        //document.getElementById('filePDF').click();
        //const pdffile = document.getElementById("filePDF").files[0];
        //const  frame = document.getElementById("PDFLoadId");
        //frame.src  = URL.createObjectURL(pdffile);

            var fileUpload = $("#filePDF").get(0);
            var files = fileUpload.files;
            var data = new FormData();
            for (var i = 0; i < files.length; {
        data.append(files[i].name, files[i]);
            }
            $.ajax({
        type: "POST",
                url: "/home/UploadFilesAjax",
                contentType: false,
                processData: false,
                data: data,
                success: function (message) {
                    if (message != "Error occurred") {
                        const frame = document.getElementById("PDFLoadId");
                        frame.src = message;
                    } else {
        alert("There was error uploading files!");
                    }

                },
                error: function () {
        alert("There was error uploading files!");
                }
            });
    }
    $("#quickFormValidation").submit(function (e) {
        e.preventDefault();

    });
   