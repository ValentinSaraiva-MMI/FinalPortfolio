<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="competence in filterByCompetences" :key="competence.id">
            <div class="flex flex-col justify-center items-center mt-12 mb-2">
                <img class="h-[70px] w-[87.5px] sm:h-[115px] md:h-[144px] lg:h-[180px]" :src="competence.image"
                    alt="image competence" />
                <p class="text-center font-lato text-[28px] text-white">{{ competence.nom }}</p>
            </div>
        </div>
    </div>
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
