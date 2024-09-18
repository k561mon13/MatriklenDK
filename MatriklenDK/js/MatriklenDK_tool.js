var MatriklenDK = {

		mapClickDialog: null,
		init: function() {

			if (!this.mapClickDialog) {
				this.mapClickDialog = new spatialmap.MapClickDialog({
					title: 'Matriklen.DK',
					text: 'Klik i kortet, for at gå til Matriklen.dk',
					closeOnClick: false,
					dockable: true,
					callback: MatriklenDK.clickHandler.bind(this),
					closeHandler: function () {
						document.getElementById('pan').getElementsByTagName('a')[0].click()
						delete this;;
					}
				});
			} else {
				this.mapClickDialog.dialog.show();
			}
			spm.getMapInteractionController().requestActivate(this.mapClickDialog.mapInteraction);
		},

		clickHandler: function (wkt) {
			var coords = MiniMap.Gui.Draw.olWktConverter.readGeometry(wkt).getCoordinates();
			var wkt_x = coords[0];
			var wkt_y = coords[1];

			params = {wkt:'POINT('+wkt_x+' '+wkt_y+')'};
			var req = spm.getSession().createPageRequest('matriklendk.getsfebfe');
			req.call(params,function(response){
				sfe = response.row[0].row[0].sfe;
				jordstykke = response.row[0].row[0].jordstykke;
				startUrl = 'https://www.matriklen.dk/index.html#/kort/sfe/'+sfe+'/jordstykker/'+jordstykke+'/';
				var win = window.open(startUrl, "_blank");
				if(win){
					win.focus();
				}
				
			});
		}

	};