<template>
    <h5 class="font-oswald text-3xl text-white">Liste des Competences</h5>


    <input type="text" v-model="filter" class="border-2" />
    <button type="button" title="Filtrage">filtrage</button>
    <div v-for="competence in filterByCompetences" :key="competence.id">
        <div>
            <p class="mt-3 mb-2 font-oswald text-white">{{ competence.nom }}</p>
            <img v-if="competence.imageLoaded" :src="competence.image" alt="image competence" />
            <img class="w-[40vh]" :src="competence.image" alt="image competence" />


            <img v-if="competence.imageLoaded" :src="competence.barre" alt="image competence" />
            <img class="w-[40vh]" :src="competence.barre" alt="image competence" />


        </div>
        <!--
            <button type=" button" @click="deleteCompetence(competence.id)" title="Supprimer"> Supprimer </button> -->

        <!-- 
            <div v-if="affformajout">
                <creation-view />
                <button @click="affformajout = false">cancel</button>
            </div>

        -->
    </div>

    <button v-if="!affformajout" @click="affformajout = true">ajout</button>


    <svg class="mx-auto mt-2" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="164.242" height="7.02148" stroke="white" stroke-linejoin="bevel" />
        <rect width="132.194" height="8.02148" fill="white" />
    </svg>


    <svg class="mx-auto mt-2" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="164.242" height="7.02148" stroke="white" />
        <rect width="66.097" height="8.02148" fill="white" />
    </svg>


    <svg class="mx-auto mt-2" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.945801" y="1.24121" width="164.242" height="7.02148" stroke="white" />
        <rect x="0.445801" y="0.741211" width="49.8" height="8.02148" fill="white" />
    </svg>



    <!--   boucle -->
</template>

 



<script>
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";

import {
    getFirestore,
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";



export default {
    name: "testView",


    data() {
        return {
            listeCompetences: [],
            nom: null,
            affformajout: false,
            filter: "",
        };
    },

    components: {},
    computed: {
        orderByCompetences: function () {
            return this.listeCompetences.sort(function (a, b) {
                if (a.nom < b.nom) return -1;
                if (a.nom > b.nom) return 1;
                return 0;
            });
        },

        filterByCompetences: function () {
            if (this.filter.length > 0) {
                let filter = this.filter.toLowerCase();
                return this.orderByCompetences.filter(function (competences) {
                    return competences.nom.toLowerCase().includes(filter);
                });
            } else {
                return this.orderByCompetences;
            }
        },
    },
    mounted() {
        this.getCompetences();
    },
    methods: {
        async getCompetences() {
            const firestore = getFirestore();
            const dbCompetences = collection(firestore, "competences");
            const query = await onSnapshot(dbCompetences, (snapshot) => {
                console.log("query", query);
                this.listeCompetences = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                this.listeCompetences.forEach(function (competences) {
                    const storage = getStorage();
                    const spaceRef = ref(storage, "competences/" + competences.image);
                    getDownloadURL(spaceRef)
                        .then((url) => {
                            competences.image = url;
                            console.log("competences", competences);
                        })
                        .catch((error) => {
                            console.log("erreur downloadUrl", error);
                        });
                });



                console.log("listeCompetences", this.listeCompetences);
            });
        },

        async createCompetences() {
            const firestore = getFirestore();
            const dbCompetences = collection(firestore, "competences");
            const docRef = await addDoc(dbCompetences, {
                Nom: this.Nom,
            });

            //console.log('document créé avec le id : ', docRef.id);
        },
        async deleteCompetences(id) {
            const firestore = getFirestore();
            const docRef = doc(firestore, "competences", id);
            await deleteDoc(docRef);
        },
    },
};
</script>
