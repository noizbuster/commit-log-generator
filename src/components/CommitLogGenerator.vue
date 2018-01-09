<template>
  <v-container fluid>

    <!--snack bar-->
    <v-snackbar
      :timeout="5000"
      :top="true"
      :multi-line="true"
      v-model="popup"
    >{{ selectedCategory + ': ' + subject}}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

    <!--card-->
    <v-layout column>
      <v-card>
        <v-card-text>
          <!--category-->
          <v-flex xs12 md12>
            <p class="headline">Categories</p>
          </v-flex>
          <v-flex xs12 md12>
            <a v-for="item in category">
              <v-btn raised :color="selectedCategory === item ? 'primary':''" v-on:click="selectCategory(item)">
                {{item}}
              </v-btn>
            </a>
          </v-flex>

          <br>
          <v-spacer></v-spacer>
          <!--title-->
          <v-flex xs12 md12>
            <p class="headline">Subject</p>
            <v-text-field name="input-1"
                          label="Commit Subject"
                          id="testing"
                          value=""
                          v-model="subject"
                          :prefix="selectedCategory + ': '"
                          :rules="[(v) => v.length <= 50 || 'Max 70 characters']"
                          :counter="50"
                          placeholder="commit message (details)"></v-text-field>
          </v-flex>

          <!--message-->
          <p class="headline">Message</p>
          <v-flex xs12 md12>
            <v-text-field name="input-1"
                          label="Commit Message"
                          id="testing"
                          value=""
                          v-model="message"
                          multi-line
                          placeholder="commit message (details)"></v-text-field>
          </v-flex>

        </v-card-text>
        <v-card-actions>
          <v-flex xs12 md12>
            <v-btn raised
                   color="primary"
                   @click.native="popup = true"
                   v-clipboard:copy="selectedCategory + ': ' + subject + (message? '\n\n' + message: '')">
              copy To Clipboard
            </v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>

    </v-layout>

  </v-container>
</template>

<script>
  export default {
    name: 'CommitLogGenerator',
    data: function () {
      return {
        popup: false,
        selectCategory: function (category) {
          this.selectedCategory = category
        },
        category: [
          'Add',
          'Implement',
          'Fix',
          'Remove',
          'Update',
          'Refactor',
          'Style',
          'Adjust',
          'Block',
          'Bump (version)',
          'Change',
          'Define',
          'Deprecate',
          'Merge',
          'Simplify',
          'Release'
        ],
        selectedCategory: '',
        subject: '',
        message: '',
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
