import { Component } from '@angular/core';
import { PlayersService } from './services/players.service';
import { ActivatedRoute } from '@angular/router';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
    selector: 'app-players',
    templateUrl: 'players.html',
    styleUrls: ['players.scss']
})
export class PlayersPage {
    team_id; team_name; team_city; players;

    constructor(private PlayersService: PlayersService, private route: ActivatedRoute, private contacts: Contacts) {
        this.route.params.subscribe(params => {
            this.team_id = params.team_id;
            this.fetchTeamById(params.team_id);
        });

        //this.initContacts();
    }

    initContacts(): void {
        let contact: Contact = this.contacts.create();

        contact.name = new ContactName(null, 'Smith', 'John');
        contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
        contact.save().then(
            () => console.log('Contact saved!', contact),
            (error: any) => console.error('Error saving contact.', error)
        );

        // If you want to open the native contacts screen and select the contacts from there use pickContact()

        this.contacts.pickContact()
            .then((response: Contact) => {
                console.log(response);
            });
    }

    fetchTeamById(teamId) {
        this.PlayersService.fetchTeamById(teamId).subscribe(
            res => {
                console.log(res.json());
                if (res.json().status) {
                    this.team_name = res.json().content.team_name;
                    this.team_city = res.json().content.team_city;
                    this.players = res.json().content.players;
                }
            }, err => { console.log(err); }
        );
    }
}
