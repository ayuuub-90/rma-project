/* eslint-disable react/prop-types */

const MentionLegals = ({ visible, setVisible }) => {
  function handleColse(e) {
    if (e.target.id === "container") {
      setVisible(false);
    }
  }

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleColse}
      className="fixed inset-0 bg-black bg-opacity-50 center"
    >
      <div className="bg-white w-[60%] max-lg:w-[95%] h-[90vh] flex flex-col justify-between">
        <div className="border p-4 text-[20px] text-gray-600  ">
          MENTIONS LEGALES - ROTHSCHILD MEDICAL ACADEMY
        </div>
        <div className="overflow-auto px-4 py-6 h-full flex flex-col gap-2 tracking-wider span">
          <p>
            Cette page décrit les conditions d’utilisation régissant
            l’utilisation de ce site (ci-après le « Site »). En consultant le
            Site, vous vous engagez sans réserve à respecter les présentes
            conditions d’utilisation. Les conditions d’utilisation pouvant être
            modifiées à tout moment, sans préavis, nous vous conseillons de les
            consulter régulièrement
          </p>
          <span>1. Propriété intellectuelle</span>
          <p>
            Ce Site appartient à et est exploité par la{" "}
            <strong>ROTHCHILD MEDICAL ACADEMY</strong>, (ci-après désignée la «
            Société »). La mise en page et chacun de ses éléments, marques,
            logos et noms de domaines compris, s’affichant sur le Site{" "}
            <strong>https://rma.fmcevent.com/ </strong>(ci-après désigné le «
            Site ») sont protégés par la législation actuelle sur la propriété
            intellectuelle et appartiennent à la R
            <strong>ROTHCHILD MEDICAL ACADEMY</strong> ou leur utilisation est
            soumise à autorisation. Aucun élément du Site ne peut être copié,
            reproduit, altéré, modifié, téléchargé, dénaturé, transmis ou
            diffusé de quelque manière que ce soit, sur quelque support que ce
            soit, en tout ou partie, sans l’accord écrit préalable de la
            Société, sauf uniquement pour être utilisés par la presse sous
            réserve du respect des droits de propriété intellectuelle et tous
            les autres droits de propriété qui sont mentionnés. Seule la copie
            pour utilisation privée est autorisée pour votre usage personnel,
            privé, non commercial, sur votre ordinateur personnel. La
            déclaration suivante doit s’afficher sur toute copie autorisée de
            tout ou partie du contenu du Site :{" "}
            <strong>
              « © ROTHCHILD MEDICAL ACADEMY – Tous droits réservés. »
            </strong>{" "}
            Tout usage non autorisé d’éléments composants ou affichés sur le
            Site ne doit pas être dénaturé, modifié ou altéré de quelque façon
            que ce soit. La
            <strong>ROTHCHILD MEDICAL ACADEMY</strong> se réserve le droit
            d’intenter des poursuites contre toute violation de ses droits de
            propriété intellectuelle.
          </p>
          <span>2. Nature des informations</span>
          <p>
            Le Site https://rma.fmcevent.com/ peut présenter des opinions
            d’experts consultés dans un domaine particulier. <br />
            Toutes informations diffusées représentent uniquement l’opinion des
            experts consultés et n’engagent en rien la responsabilité de la{" "}
            <strong>ROTHCHILD MEDICAL ACADEMY</strong>. Tout expert de ce type
            n’est pas un collaborateur de la
            <strong>ROTHCHILD MEDICAL ACADEMY</strong> et ne reçoit pas
            d’émoluments en échange de l’usage de son opinion par la{" "}
            <strong>ROTHCHILD MEDICAL ACADEMY</strong>. La Société n’est pas
            responsable de l’exactitude ou de l’exhaustivité de toute
            information et opinion de cette nature. Les opinions des experts
            reflètent leurs propres points de vue personnels et ne doivent
            jamais être interprétées comme étant l’opinion ou la responsabilité
            de la <strong>ROTHCHILD MEDICAL ACADEMY</strong>. Le Site comprend
            des vidéos de présentation de l’activité de la{" "}
            <strong>ROTHCHILD MEDICAL ACADEMY</strong>
            et ces vidéos peuvent contenir des bribes d’information sur la
            santé, l’état physique, le domaine médical et les traitements
            chirurgicaux et médicaux à usage humain uniquement qui ne doivent en
            aucun cas être utilisés pour effectuer un diagnostic médical de
            toute maladie ou problème physique.
          </p>
          <span>3. Liens vers d’autres sites</span>
          <p>
            Un cookie peut s’installer automatiquement sur le logiciel de
            navigation de l’utilisateur, lors de ses visites. Le cookie est un
            bloc de données qui ne permet pas d’identifier les utilisateurs mais
            sert à enregistrer des informations relatives à la navigation de
            ceux-ci sur le site (pages consultées, date et heure de la
            consultation, informations fournies, etc.). Les cookies peuvent être
            utilisés à des fins de ciblage publicitaire. Le paramétrage du
            logiciel de navigation permet d’informer de la présence de cookie(s)
            et éventuellement de la refuser de la manière décrite à l’adresse
            suivante : http://www.cnil.fr/. L’utilisateur peut s’opposer à
            l’enregistrement de cookies en configurant son navigateur (dans le
            menu « outil options » de Mozilla Firefox ou de Microsoft Explorer).
            L’utilisateur dispose d’un droit d’accès, de retrait et de
            modification des données personnelles communiquées par le biais des
            cookies. Sinon, vous pouvez en faire la demande comme suit :
          </p>
          <p>• Par courriel : contact@fmcproduction.com</p>
          <p>
            • Par courrier : FMC Production | 9 bis Bd Emile Romanet | 44100
            NANTES | France
          </p>
          <span>5. Informations personnelles et autres</span>
          <p>
            La Société se réserve le droit d’envoyer des « Newsletters » aux
            utilisateurs qui en ont fait la demande et uniquement dans ce cadre.
            Elle s’engage à supprimer vos coordonnées sur les bases de données
            de la Société à votre demande en cliquant sur la mention « Pour vous
            désinscrire des bases de données de la{" "}
            <strong>ROTHCHILD MEDICAL ACADEMY</strong>, cliquez ici » présente
            ladite « Newsletter ». Par ailleurs, la Société s’engage à ne pas
            révéler à des tiers les informations personnelles que vous pourrez
            lui communiquer (adresses mail et autres informations). <br /> En
            vertu de la législation locale « loi informatique et liberté du 6
            janvier 1978 », vous disposez d’un droit d’accès, de modification,
            de rectification et de suppression des données qui vous concernent.
            Sinon, vous pouvez en faire la demande comme suit :
          </p>
          <span>6. Limites de responsabilité</span>
          <p>
            La ROTHCHILD MEDICAL ACADEMY s’efforce d’assurer au mieux de ses
            possibilités, l’exactitude et la mise à jour des informations
            diffusées sur ce site, dont elle se réserve le droit de corriger, à
            tout moment et sans préavis, le contenu. Toutefois, nous ne pouvons
            garantir :
          </p>
          <p>
            • l’exactitude, la précision ou l’exhaustivité des informations
            mises à la disposition sur ce site, <br />
            • tout dommage résultant d’une intrusion frauduleuse par une tierce
            partie aboutissant à une modification des informations ou des
            éléments mis à disposition sur le Site, <br />• tout dommage aux
            biens ou dommage indirect, pour toute raison, de toute origine,
            nature ou ayant toute conséquence quelconque, même si la Société
            avait été averti de la possibilité d’un tel dommage ou perte, causé
            en raison de tout accès au Site ou de l’impossibilité d’y accéder,
            en raison de l’utilisation des Sites, y compris tout dommage ou
            virus qui peut infecter votre ordinateur ou tout autre bien, et/ou
            en raison de la foi ajoutée à toute information provenant
            directement ou indirectement du Site.
          </p>
          <span>7. Disponibilité du site Web</span>
          <p>
            Vous acceptez qu’il soit techniquement impossible d’offrir un Site
            exempt de tout défaut et que la Société ne peut pas s’engager à cet
            effet ; que des défauts peuvent rendre le Site temporairement
            indisponible ; et que le fonctionnement du Site peut être affecté
            par des événements et/ou des problèmes sur lesquels la Société n’a
            aucun contrôle comme, par exemple, en tant que moyen de transmission
            et de communication entre vous et la Société et entre la Société et
            d’autres réseaux. La Société et/ou ses fournisseurs peuvent, à tout
            moment, modifier ou interrompre, temporairement ou définitivement,
            tout ou partie du Site pour en effectuer la maintenance et/ou
            apporter des améliorations et/ou des modifications. La Société
            décline toute responsabilité pour toute modification, suspension ou
            interruption du Site.
          </p>
        </div>
        <div className="border flex justify-end">
          <button
            className="text-[#A9D2F5] p-4 font-bold text-lg"
            onClick={() => setVisible(false)}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentionLegals;
