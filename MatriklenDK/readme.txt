--------------------
INSTALLATION
--------------------
opret modul (skal tilpasses den faktiske mappe-placering):
	<module dir="custom/tools/MatriklenDK" name="MatriklenDK"/>

inkluder i profil:
	<tool ignore="not ModuleDefined('MatriklenDK')" module="MatriklenDK" name="MatriklenDK" parenttool="tools-menu"/>
	
Datasources.xml skal rettes til, så den kan hente SFE-nummer og jordstykkeid
