import React from 'react';

class Cv {
    render(){
    return(
        <div className="cv" >

<div role="banner">
	
</div>

<div class="contactform clearfix">
	<div class="container_16">
		<h3>Contactez-moi</h3>
		<p>Remplissez le formulaire ci-dessous afin de m'envoyer un message. Je vous répondrais dans les plus bref délai. 
		<br><em>Tous les champs sont requis.</em></br >
		<div novalidate="novalidate" method="post" action="#" name="contact" class="grid_16">
			<div class="grid_10"><textarea name="message" placeholder="Votre message" class="required"></textarea></div >
			
		</div>
	</p>
</div>

<div role="main" class="container_16 clearfix">

		<div class="grid_8 apropos">
			<h3>A propos</h3>
			<p>Cette div vous sert de présentation.</p>
			<p>Pellentesque nec nisi at sapien sagittis sagittis. Aliquam eu 
condimentum mauris. Proin accumsan enim at risus hendrerit lobortis. 
Nunc sollicitudin sodales lectus, et rhoncus mi molestie hendrerit. 
Vestibulum velit lorem, rhoncus a congue ultricies, faucibus facilisis 
risus. Mauris turpis ante, aliquet ac venenatis at, ornare ut velit. 
Duis ut erat neque, eget consectetur tellus. </p>
		</div>
		<div class="grid_8 competences">
			<h3>Compétences</h3>
			<ul class="barres">
				<li data-skills="80">Compétences 1<span style="width: 80%;"></span></li>
				<li data-skills="60">Compétences 2<span style="width: 60%;"></span></li>
				<li data-skills="75">Compétences 3<span style="width: 75%;"></span></li>
				<li data-skills="40">Compétences 4<span style="width: 40%;"></span></li>
				<li data-skills="95">Compétences 5<span style="width: 95%;"></span></li>
			</ul>
		</div>
	</div>
		<div class="grid_16 experiences">
			<h3>Expériences</h3>
			<ul>
				<li>
					<h4><strong>Nom du poste</strong> chez nom de l'employeur</h4>
					<span class="lieu">Lieu</span>
					<span class="dates">Dates</span>
					<p>Une petite description du poste, décrivez votre rôle et vos 
tâches en quelques mots afin que le recruteur en sache plus sur la 
nature de votre travail.</p>
				</li>
				<li>
					<h4><strong>Nom du poste</strong> chez nom de l'employeur</h4>
					<span class="lieu">Lieu</span>
					<span class="dates">Dates</span>
					<p>Une petite description du poste, décrivez votre rôle et vos 
tâches en quelques mots afin que le recruteur en sache plus sur la 
nature de votre travail.</p>
				</li>
			</ul>
		</div>
	
		<div class="grid_16 formations">
			<h3>Formations</h3>
			<ul>
				<li>
					<h4><strong>Nom de la formation / diplôme</strong> à nom de l'école</h4>
					<span class="lieu">Lieu</span>
					<span class="dates">Période</span>
					<p>Clarifiez la formation (les abréviations ne sont pas connues de tout le monde).</p>
				</li>
				<li>
					<h4><strong>Nom de la formation / diplôme</strong> à nom de l'école</h4>
					<span class="lieu">Lieu</span>
					<span class="dates">Période</span>
					<p>Clarifiez la formation (les abréviations ne sont pas connues de tout le monde).</p>
				</li>
			</ul>
		</div>
	
		<div class="grid_8 loisirs">
			<h3>Loisirs</h3>
			<p><strong>Sports :</strong> si vous en pratiquez</p>
			<p><strong>Association :</strong> si vous êtes membre d'une association</p>
			<p>D'autres loisirs plus vagues, complétez ici.</p>
		</div>
	
		<div class="grid_8 contact">
			<h3>Contact</h3>
			<p>Si mon profil vous intéresse, n'hésitez pas à me contacter :</p>
			<ul>
				<li class="lieu">Paris, France</li>
				<li class="phone">06 00 00 00 00</li>
				<li class="mail"><a href="mailto:mon.adresse@email.fr">mon.adresse@email.fr</a></li>
				<li class="site"><a href="http://www.mon-site.fr/">www.mon-site.fr</a></li>
				<li class="form"><a class="toContactform">via le formulaire de contact</a></li>
				<li class="form"><a class="toContactform">via le formulaire de contact</a></li>
			</ul>
		</div>
</div>


        </div>
		
		
       
    )
}
}
export default Cv;