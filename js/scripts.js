function delete_reus(id, name){

	conf = window.confirm("Are you sure you want to delete this content type?\n\n"+name);
	
	if(conf){
		window.location='admin.php?page='+cct_directory+'/cct&id='+id+'&f=delete';	
	}

}