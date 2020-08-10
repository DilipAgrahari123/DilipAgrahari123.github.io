function UpdateSupplier() {
    $("#btnSupplier").prop('disabled', true);
    $("#btnSupplier").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please Wait...');
    $("#Btns").css("pointer-events", "none");
    $.ajax({
        type: "POST",
        url: "/webservices/UpdateSupplier",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#btnSupplier").prop('disabled', false);
            $("#btnSupplier").html('Supplier');
            $("#Btns").css("pointer-events", "auto");
            toastr.success(response)          
        },
        failure: function (message) {
            toastr.failure(message) 
            $("#btnSupplier").prop('disabled', false);
            $("#btnSupplier").html('Supplier');
            $("#Btns").css("pointer-events", "auto");
        },
        error: function (result) {
            toastr.error(result) 
            $("#btnSupplier").prop('disabled', false);
            $("#btnSupplier").html('Supplier');
            $("#Btns").css("pointer-events", "auto");
        }
    });
}
function UpdateAccount() {
    $("#btnAccountCode").prop('disabled', true);
    $("#btnAccountCode").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please Wait...');
    $("#Btns").css("pointer-events", "none");
    $.ajax({
        type: "POST",
        url: "/webservices/UpdateAccount",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#btnAccountCode").prop('disabled', false);
            $("#btnAccountCode").html('Account Code');
            $("#Btns").css("pointer-events", "auto");
            toastr.success(response)
        },
        failure: function (message) {
            toastr.failure(message)
            $("#Btns").css("pointer-events", "auto");
            $("#btnAccountCode").prop('disabled', false);
            $("#btnAccountCode").html('Account Code');
        },
        error: function (result) {
            toastr.error(result)
            $("#Btns").css("pointer-events", "auto");
            $("#btnAccountCode").prop('disabled', false);
            $("#btnAccountCode").html('Account Code');
        }
    });
}
function UpdateJob() {
    $("#btnJobCode").prop('disabled', true);
    $("#btnJobCode").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please Wait...');
    $("#Btns").css("pointer-events", "none");
    $.ajax({
        type: "POST",
        url: "/webservices/UpdateJob",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#btnJobCode").prop('disabled', false);
            $("#btnJobCode").html('Job Code');
            $("#Btns").css("pointer-events", "auto");
            toastr.success(response)
        },
        failure: function (message) {
            toastr.failure(message)
            $("#Btns").css("pointer-events", "auto");
            $("#btnJobCode").prop('disabled', false);
            $("#btnJobCode").html('Job Code');
        },
        error: function (result) {
            toastr.error(result)
            $("#Btns").css("pointer-events", "auto");
            $("#btnJobCode").prop('disabled', false);
            $("#btnJobCode").html('Job Code');
        }
    });
}
function UpdateTax() {
    $("#btnTaxCode").prop('disabled', true);
    $("#btnTaxCode").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please Wait...');
    $("#Btns").css("pointer-events", "none");
    $.ajax({
        type: "POST",
        url: "/webservices/UpdateTax",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#Btns").css("pointer-events", "auto");
            $("#btnTaxCode").prop('disabled', false);
            $("#btnTaxCode").html('Tax Code');
            toastr.success(response)
        },
        failure: function (message) {
            toastr.failure(message)
            $("#Btns").css("pointer-events", "auto");
            $("#btnTaxCode").prop('disabled', false);
            $("#btnTaxCode").html('Tax Code');
        },
        error: function (result) {
            toastr.error(result)
            $("#Btns").css("pointer-events", "auto"); s
            $("#btnTaxCode").prop('disabled', false);
            $("#btnTaxCode").html('Tax Code');
        }
    });
}
function UpdateItems() {
    $("#Btns").css("pointer-events", "none");
    $("#btnItems").prop('disabled', true);
    $("#btnItems").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please Wait...');
    $.ajax({
        type: "POST",
        url: "/webservices/UpdateItems",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#Btns").css("pointer-events", "auto");
            $("#btnItems").prop('disabled', false);
            $("#btnItems").html('Items');
            toastr.success(response)
        },
        failure: function (message) {
            toastr.failure(message)
            $("#Btns").css("pointer-events", "auto");
            $("#btnItems").prop('disabled', false);
            $("#btnItems").html('Items');
        },
        error: function (result) {
            toastr.error(result)
            $("#Btns").css("pointer-events", "auto");
            $("#btnItems").prop('disabled', false);
            $("#btnItems").html('Items');
        }
    });
}

