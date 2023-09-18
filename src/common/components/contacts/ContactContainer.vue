<template>
    <div @click="$emit('click')">
        <md-card md-with-hover class="max-w-sm">
            <md-ripple>
                <div class="p-6 ml-3 flex justify-start items-center space-x-4">
                    <div class="shrink-0">
                        <img
                            src="../../../assets/icons/Test Account.svg"
                            alt="Test Account"
                        />
                    </div>
                    <div>
                        <h3 class="font-medium text-xl leading-6">
                            <slot name="name">Vardas ir pavardė</slot>
                        </h3>
                        <p class="text-base leading-6">
                            <slot name="position">Pozicija: pozicija</slot>
                        </p>
                    </div>
                </div>
                <div
                    class="pb-4 ml-10 mt-1.5 space-y-2 flex flex-col text-left"
                >
                    <slot name="contact-information">
                        <p class="text-base leading-6 tracking-wide">
                            Telefono nr: +00000000000
                        </p>
                        <p class="text-base leading-6 tracking-wide">
                            El. paštas: example@gmail.com
                        </p>
                        <p class="text-base leading-6 tracking-wide">
                            Adresas: Saltoniškių g. 2, Vilnius
                        </p>
                    </slot>
                </div>
            </md-ripple>
        </md-card>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {};
    },
};
</script>
