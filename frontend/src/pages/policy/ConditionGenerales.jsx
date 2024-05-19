/* eslint-disable react/prop-types */

const ConditionGenerales = ({ visible2, setVisible2 }) => {
  function handleColse(e) {
    if (e.target.id === "container") {
      setVisible2(false);
    }
  }

  if (!visible2) return null;
  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-50 center"
      onClick={handleColse}
    >
      <div className="bg-white w-[60%] max-lg:w-[95%] h-[90vh] flex flex-col justify-between">
        <div className="border p-4 text-[20px] text-gray-600  ">
          CONDITIONS GÉNÉRALES D’UTILISATION DE LA PLATEFORME DE DIFFUSION DE
          ROTHSCHILD MEDICAL ACADEMY
        </div>
        <div className="overflow-auto px-4 py-6 h-full flex flex-col gap-2 tracking-wider span">
          <span>PRÉAMBULE</span>
          <p>
            Le présent document a pour but de vous informer des Conditions
            Générales d’Utilisation (CGU) applicables à la plateforme de
            diffusion en ligne des événements en direct et en différé de
            ROTHSCHILD MEDICAL ACADEMY.
          </p>
          <p>
            ROTHSCHILD MEDICAL ACADEMY est l’entité qui regroupe l’ensemble des
            activités formation de l’HÔPITAL FONDATION ADOLPHE DE ROTHSCHILD.
          </p>
          <p>
            Les présentes Conditions Générales d’Utilisation sont conclues
            entre:
          </p>
          <p>
            L’HÔPITAL FONDATION ADOLPHE DE ROTHSCHILD, Association déclarée,
            dont le siège social se situe 29 Rue Manin 75019 Paris, et dont le
            numéro SIREN est le 784 778 029.
          </p>
          <p>Ci-après désignée « HÔPITAL FONDATION ADOLPHE DE ROTHSCHILD »,</p>
          <p>Représenté par ROTHSCHILD MEDICAL ACADEMY</p>
          <p>Ci-après désignée « ROTHSCHILD MEDICAL ACADEMY »</p>
          <p>D’une part ;</p>
          <p>
            Et, Toute personne physique ou morale souhaitant créer un compte sur
            la plateforme de diffusion en ligne pour visionner en direct ou en
            différé les événements proposés. Ci-après dénommée « l’Utilisateur »
            D’autre part.
          </p>
          <span>ARTICLE 1 : DÉFINITIONS</span>
          <p>
            Les termes employés dans le corps des présentes Conditions Générales
            d’Utilisation et débutant par une majuscule, qu’ils soient utilisés
            au singulier ou au pluriel, auront la signification qui leur est
            donnée ci-après
          </p>
          <p>
            <strong>« Accès »</strong> désigne le compte créé pour un
            Utilisateur sur la Plateforme.
          </p>
          <p>
            <strong>« Donnée »</strong> désigne les informations relatives aux
            Utilisateurs fournies à ROTHSCHILD MEDICAL ACADEMY pour l’ouverture
            des Accès dans le cadre du Service. Les Données peuvent comporter
            des données personnelles.
          </p>
          <p>
            <strong>« Événement »</strong> désigne un événement diffusé sur la
            Plateforme sur un thème particulier. Un Événement comporte des
            textes et contenus de nature technique et/ou réglementaire.
          </p>
          <p>
            <strong>« Inscription »</strong> désigne la création d’un Accès pour
            un Utilisateur.
          </p>
          <p>
            <strong>« Partie »</strong> désigne les signataires des présentes
            Conditions Générales d’Utilisation.
          </p>
          <p>
            <strong>« Plateforme »</strong> désigne la plateforme de diffusion
            en ligne de ROTHSCHILD MEDICAL ACADEMY.
          </p>
          <p>
            <strong>« Service »</strong> désigne l’ensemble des prestations
            fournies par ROTHSCHILD MEDICAL ACADEMY au travers de la Plateforme
            et en complément à celle-ci.
          </p>
          <p>
            <strong>« Utilisateur »</strong> désigne toute personne physique ou
            morale ayant souscrit un accès à la Plateforme.
          </p>
          <p>
            <strong>« Visite »</strong> désigne une connexion de l’Utilisateur
            via son Accès.
          </p>
          <span>ARTICLE 2 : OBJET</span>
          <p>
            Les présentes Conditions Générales d’Utilisation ont pour objet de
            définir les termes et conditions dans lesquels l’Utilisateur utilise
            le Service.
          </p>
          <span>
            ARTICLE 3 : APPLICATION ET MODIFICATION DES CONDITIONS GÉNÉRALES
            D’UTILISATION
          </span>
          <p>
            Le fait de créer un Accès sur la Plateforme pour utiliser le Service
            implique la consultation préalable des présentes Conditions
            Générales d’Utilisation et l’adhésion automatique, irrévocable et
            sans réserve de l’Utilisateur aux présentes Conditions Générales
            d’Utilisation.
          </p>
          <p>
            Par suite, l’Utilisateur reconnaît être parfaitement informé du fait
            que son accord concernant le contenu des présentes Conditions
            Générales d’Utilisation ne nécessite pas la signature manuscrite de
            ce document.
          </p>
          <p>
            Aucune condition particulière ne peut, sauf acceptation expresse,
            formelle et écrite de ROTHSCHILD MEDICAL ACADEMY, prévaloir sur ces
            Conditions Générales d’Utilisation.
          </p>
          <p>
            ROTHSCHILD MEDICAL ACADEMY se réserve la possibilité d’adapter ou de
            modifier à tout moment et sans préavis les présentes Conditions
            Générales d’Utilisation. En cas de modification, il sera appliqué à
            chaque Visite les Conditions Générales d’Utilisation en vigueur au
            jour de la Visite.
          </p>
          <p>
            Il est expressément stipulé que l’Utilisateur doit être âgé d’au
            moins dix-huit (18) ans, être capable juridiquement de contracter,
            et utiliser cette Plateforme conformément aux Conditions Générales
            d’Utilisation.
          </p>
          <p>
            L’Utilisateur personne morale déclare être immatriculé en France ou
            dans son pays d’origine au moment de son Inscription sur la
            Plateforme.
          </p>
          <span>ARTICLE 4 : SERVICES PROPOSÉS</span>
          <p>
            ROTHSCHILD MEDICAL ACADEMY propose sur sa Plateforme la diffusion en
            direct et en différé d’événements de formations ou autres à
            destination des professionnels de santé.
          </p>
          <span>ARTICLE 5 : DISPOSITIONS FINANCIÈRES</span>
          <p>
            L’Inscription à la Plateforme et l’utilisation du Service sont
            gratuites et ne peuvent donner lieu à aucune transaction financière
            entre l’Utilisateur et ROTSCHILD MEDICAL ACADEMY, entre
            Utilisateurs, ou entre un Utilisateur et un tiers.
          </p>
          <span>ARTICLE 6 : UTILISATION DU SERVICE</span>
          <strong>6.1 Inscription sur la Plateforme</strong>
          <p>
            L’Inscription correspond à la création d’un Accès pour un
            Utilisateur sur la Plateforme. L’Utilisateur remplit un formulaire
            en ligne disponible sur la Plateforme dans lequel il fournit un
            certain nombre de Données : Nom, Prénom, E-mail, Pays de résidence,
            etc.
          </p>
          <p>
            L’Utilisateur doit confirmer être un professionnel de santé. Lorsque
            l’Utilisateur confirme son Inscription, il reçoit un message par
            mail lui demandant de cliquer sur un lien pour valider la création
            de son Accès. Une fois son Accès validé, l’Utilisateur peut utiliser
            le Service.
          </p>
          <strong>
            6.2 Confidentialité et inaliénabilité des Accès et des codes d’accès
          </strong>
          <p>
            Les Accès sont nominatifs et individuels à chaque Utilisateur et ne
            sont pas transmissibles, que ce soit à titre gratuit ou onéreux. Un
            Accès est un compte qui est défini par un identifiant et un mot de
            passe ; ceux-ci constituent les codes d’accès de l’Utilisateur. Le
            mot de passe et l’identifiant qui permettent à l’Utilisateur de
            s’identifier et de se connecter à la Plateforme sont strictement
            personnels et confidentiels, et placés sous la responsabilité
            exclusive de l’Utilisateur. L’Utilisateur s’engage à les conserver
            confidentiels et à ne pas les transmettre à quiconque sous quelque
            forme que ce soit. Toute Visite effectuée aux moyens de ces éléments
            d’identification est réputée réalisée par l’Utilisateur.
          </p>
          <p>
            L’Utilisateur garantit ROTHSCHILD MEDICAL ACADEMY et l’HÔPITAL
            FONDATION ADOLPHE DE ROTHSCHILD de toute utilisation frauduleuse ou
            abusive de ses codes d’accès. L’Utilisateur informera sans délai
            ROTHSCHILD MEDICAL ACADEMY de la perte ou du vol des codes d’accès.
            En cas de violation constatée de la clause d’inaliénabilité ou de
            partage des codes d’accès, ROTHSCHILD MEDICAL ACADEMY se réserve le
            droit de suspendre le Service sans indemnité, préavis ni information
            préalable.
          </p>
        </div>
        <div className="border flex justify-end">
          <button
            className="text-[#A9D2F5] p-4 font-bold text-lg"
            onClick={() => setVisible2(false)}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConditionGenerales;
