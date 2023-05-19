import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.page.html',
  styleUrls: ['./puesto.page.scss'],
})
export class PuestoPage implements OnInit {
  presentingElement: any;
  searchTerm: string = '';
  selectedItem: any;
  items: string[] = [
    'corp.ti.ws16',
    'corp.ti.ws17',
    'corp.ti.ws18',
    'corp.ti.ws19',
    'corp.ti.ws20',
    'corp.ti.ws21',
    'corp.ti.ws22',
  ];
  availability: boolean[] = [true, false, true, true, false, false, false];
  filteredItems: { item: string; available: boolean }[] = [];

  handleInput() {
    this.filterItems();
  }

  filterItems() {
    if (this.searchTerm.trim() === '') {
      this.filteredItems = [];
    } else {
      this.filteredItems = this.items
        .map((item, index) => {
          return { item: item, available: this.availability[index] };
        })
        .filter((filteredItem) =>
          filteredItem.item
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        );
    }
  }
  selectItem(item: { item: string; available: boolean }) {
    if (item.available) {
      this.selectedItem = item.item;
      this.searchTerm = item.item;
      this.filteredItems = [];
    }
  }

  constructor(private actionSheetCtrl: ActionSheetController,private toastController: ToastController) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
  

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Desea Cancelar la reserva?',
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            window.location.reload();
          },
        },
        
        {
          text: 'No',
          role: 'cancel',
        },
        
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Reserva exitosa!',
      duration: 9500,
      position: position,
    });
    toast.present().then(() => {
      window.location.reload();
    });
  }
}