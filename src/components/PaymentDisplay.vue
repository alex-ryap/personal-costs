<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-text-field
              v-model="editedItem.date"
              :rules="[(date) => !!date || 'Date is required']"
              label="Date"
            ></v-text-field>
            <v-select
              v-model="editedItem.category"
              label="Category"
              :rules="[(category) => !!category || 'Category is required']"
              :items="categories"
            ></v-select>
            <v-text-field
              v-model.number="editedItem.amount"
              :rules="[
                (amount) => !!amount || 'Amount is required',
                (amount) => amount > 0 || 'Amount must be more than 0',
              ]"
              label="Amount"
            ></v-text-field>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" dark @click="dialog = false">
            <v-icon>mdi-close</v-icon> Close
          </v-btn>
          <v-btn color="success" @click="save" :disabled="!formIsValid">
            <v-icon>mdi-check</v-icon> Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="red" dark @click="deleteItemConfirm">
            <v-icon>mdi-delete</v-icon> Delete
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn color="teal" dark class="mb-4" @click="addNewPaymentDialog">
      Add new payment <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="items"
      sort-by="id"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItemDialog(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItemDialog(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <v-snackbar v-model="snackbar" color="success" right>
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
    },
    categories: {
      type: Array,
    },
  },
  data: () => {
    return {
      headers: [
        {
          text: '#',
          value: 'id',
        },
        {
          text: 'Date',
          value: 'date',
        },
        {
          text: 'Category',
          value: 'category',
        },
        {
          text: 'Amount',
          value: 'amount',
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false,
        },
      ],
      dialog: false,
      dialogDelete: false,
      snackbar: false,
      snackText: '',
      editedIndex: -1,
      editedItem: {
        date: '',
        category: 0,
        amount: 0,
      },
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Add new payment' : 'Edit payment';
    },
    getCurrentDate() {
      const today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      const year = today.getFullYear();

      day = day < 10 ? '0' + day : day;
      month = month < 10 ? '0' + month : month;
      return `${day}.${month}.${year}`;
    },

    formIsValid() {
      if (
        this.editedItem.date &&
        this.editedItem.category &&
        this.editedItem.amount &&
        this.editedItem.amount > 0
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapMutations({
      loadPayments: 'setPaymentsList',
      addPayment: 'addDataToPaymentsList',
      editItem: 'editItem',
      deleteItem: 'removeItemFromPaymentList',
    }),

    clear() {
      this.editedIndex = -1;
      this.editedItem = {
        date: '',
        category: 0,
        amount: 0,
      };
    },

    save() {
      if (this.editedIndex === -1) {
        this.addNewPaymentConfirm();
      } else {
        this.editItemConfirm();
      }
    },

    addNewPaymentDialog() {
      this.clear();
      this.editedItem.date = this.getCurrentDate;
      this.dialog = true;
    },

    addNewPaymentConfirm() {
      this.close();
      this.snackText = 'Success add new payment';
      this.snackbar = true;
      const payment = {
        date: this.editedItem.date,
        category: this.editedItem.category,
        amount: this.editedItem.amount,
      };
      this.clear();

      this.addPayment(payment);
    },

    editItemDialog(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    editItemConfirm() {
      this.close();
      this.snackText = 'Success edit payment';
      this.snackbar = true;
      const payment = {
        id: this.editedIndex,
        item: {
          id: this.editedItem.id,
          date: this.editedItem.date,
          category: this.editedItem.category,
          amount: this.editedItem.amount,
        },
      };
      this.clear();
      this.editItem(payment);
    },

    deleteItemConfirm() {
      this.deleteItem(this.editedIndex);
      this.clear();
      this.closeDelete();
    },

    deleteItemDialog(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    close() {
      this.dialog = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    },
  },
  created() {
    this.date = this.getCurrentDate;
  },
};
</script>

<style lang="scss">
.table {
  width: 400px;
  text-align: center;
  border-collapse: collapse;
}

.table__string {
  border-top: 1px solid #ddd;
}

th,
td {
  padding: 10px 20px;
}
</style>
