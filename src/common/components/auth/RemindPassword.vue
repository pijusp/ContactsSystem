<template>
    <div class="px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-md h-3/6">
        <div class="max-w-lg mx-8">
            <p class="text-center text-5xl font-medium leading-14">
                Priminti slaptažodį
            </p>
            <form
                action=""
                class="mb-0 mt-6 space-y-4 p-4 flex flex-col items-center"
            >
                <BaseInput
                    :placeholder="'Įveskite el. pašto adresą...'"
                    :inputId="'email'"
                    :type="'email'"
                    :label="'Elektroninis paštas'"
                    class="w-449"
                >
                    <template #iconLeft>
                        <img
                            src="../../../assets/icons/Mail.svg"
                            alt="Mail icon"
                        />
                    </template>
                </BaseInput>

                <BaseButton> Pateikti </BaseButton>
            </form>
        </div>
    </div>
</template>

<script>
import BaseInput from "../base-models/BaseInput.vue";
import BaseButton from "../base-models/BaseButton.vue";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    components: {
        BaseInput,
        BaseButton,
    },
    methods: {},
};
</script>

<style scoped></style>
