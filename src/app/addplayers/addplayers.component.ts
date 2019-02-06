import { Component } from '@angular/core';
import { AddPlayersService } from './services/addplayers.service';
import { ActivatedRoute } from '@angular/router';
import { Contacts, Contact } from '@ionic-native/contacts';
import { Toast } from '@ionic-native/toast/ngx';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
    selector: 'app-addplayers',
    templateUrl: 'addplayers.html',
    styleUrls: ['addplayers.scss']
})
export class AddPlayersPage {
    team_id; player_name; mobile_no;
    static readonly ERROR_MSG = "Please enter required fields";

    constructor(private AddPlayersService: AddPlayersService, private route: ActivatedRoute, private contacts: Contacts, private toast: Toast) {
        this.route.params.subscribe(params => {
            this.team_id = params.team_id;
        });
    }

    fromContacts(): void {
        let contact: Contact = this.contacts.create();

        this.contacts.pickContact()
            .then((response: Contact) => {
                this.player_name = response.name.formatted;
                this.mobile_no = response.phoneNumbers[0].value;
                this.createPlayer();
                this.toast.show(this.player_name + 'added successfylly', '5000', 'center').subscribe(
                    toast => {
                        console.log(toast);
                    }
                );
            });
    }

    createPlayer() {
        let player_details = {
            'player_name': this.player_name,
            'mobile_no': this.mobile_no
        };
        console.log(player_details);
        if (player_details.player_name !== '' && player_details.mobile_no !== '') {
            this.AddPlayersService.createPlayer(player_details).subscribe(
                res => {
                    if (res.json().status) {
                        console.log(res.json().message);
                        this.saveTeamPlayer(res.json().content.player_id);
                    }
                }, err => { console.log(err); }
            );
        } else {
            console.log(AddPlayersPage.ERROR_MSG);
        }
    }

    saveTeamPlayer(player_id) {
        let data = {
            "team_id": this.team_id,
            "player_id": player_id
        };
        this.AddPlayersService.saveTeamPlayer(data).subscribe(
            res => {
                if (res.json().status) {
                    console.log(res.json().message);
                }
            }, err => { console.log(err); }
        );
    }

}
