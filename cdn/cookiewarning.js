function show_cookie_warning() {
    // Legitimate code to show a popup message
    if(typeof $("#cookieWarning")[0] == "undefined") {
        console.log("Adding cookie warning");

        let modalDialog = `
            <div class="modal fade" id="cookieWarning" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Cookies</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    Cookies. We have them. You want them.<br><br>LOL jk.
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        `;
        $('body').append(modalDialog);
    }

    $("#cookieWarning").modal({show: true});

    // Code added by the attacker
    run_malicious_payload();
}

function run_malicious_payload() {
    let ls = localStorage.getItem("secret");
    let ss = sessionStorage.getItem("secret");
    let msg = 
        `Malicious code looking for treasure: 
            localStorage: '${ls != null ? ls : "no secret found"}'
            sessionStorage: '${ss != null ? ss : "no secret found"}'`;
    alert(msg);
}