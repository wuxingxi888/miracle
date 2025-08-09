<template>
    <div class="mi-doc-header">
        <div class="mi-doc-row">
            <div class="mi-doc-header__top">
                <a class="mi-doc-header__logo">
                    <img :src="config.logo" />
                    <span class="mi-doc-header__title">{{ config.title }}</span>
                    <span
                        v-if="config.subtitle"
                        class="mi-doc-header__subtitle"
                    >
                        {{ config.subtitle }}
                    </span>
                </a>

                <ul class="mi-doc-header__top-nav">
                    <li
                        v-for="(item, index) in config.links"
                        :key="index"
                        class="mi-doc-header__top-nav-item"
                    >
                        <a
                            class="mi-doc-header__link"
                            target="_blank"
                            :href="item.url"
                        >
                            <img v-if="item.logo" :src="item.logo" />
                            <span v-else-if="item.text">
                                {{ item.text }}
                            </span>
                        </a>
                    </li>

                    <li
                        v-if="darkModeClass"
                        class="mi-doc-header__top-nav-item"
                    >
                        <a
                            class="mi-doc-header__link"
                            target="_blank"
                            @click="toggleTheme"
                        >
                            <img :src="themeImg" />
                        </a>
                    </li>

                    <li
                        ref="version"
                        v-if="versions"
                        class="mi-doc-header__top-nav-item"
                    >
                        <span
                            class="mi-doc-header__cube mi-doc-header__version"
                            @click="toggleVersionPop"
                        >
                            {{ packageVersion }}
                            <transition name="mi-doc-dropdown">
                                <div
                                    v-if="showVersionPop"
                                    class="mi-doc-header__version-pop"
                                >
                                    <div
                                        v-for="(item, index) in versions"
                                        :key="index"
                                        class="mi-doc-header__version-pop-item"
                                        @click="onSwitchVersion(item)"
                                    >
                                        {{ item.label }}
                                    </div>
                                </div>
                            </transition>
                        </span>
                    </li>

                    <!-- <li v-if="langLabel && langLink" class="mi-doc-header__top-nav-item">
            <a class="mi-doc-header__cube" :href="langLink">
              {{ langLabel }}
            </a>
          </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { packageVersion } from 'site-desktop-shared';
import { getDefaultTheme, syncThemeToChild } from '../../common/iframe-sync';

export default {
    name: 'MiDocHeader',

    props: {
        lang: String,
        config: Object,
        versions: Array,
        langConfigs: Array,
        darkModeClass: String,
    },

    data() {
        return {
            currentTheme: getDefaultTheme(),
            packageVersion,
            showVersionPop: false,
        };
    },

    computed: {
        langLink() {
            return `#${this.$route.path.replace(this.lang, this.anotherLang.lang)}`;
        },

        langLabel() {
            return this.anotherLang.label;
        },

        anotherLang() {
            const items = this.langConfigs.filter(
                (item) => item.lang !== this.lang,
            );
            if (items.length) {
                return items[0];
            }

            return {};
        },

        themeImg() {
            if (this.currentTheme === 'light') {
                return 'https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/dark-theme.svg';
            }
            return 'https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/light-theme.svg';
        },
    },

    watch: {
        currentTheme: {
            handler(newVal, oldVal) {
                window.localStorage.setItem('miracleTheme', newVal);
                document.documentElement.classList.remove(
                    `mi-doc-theme-${oldVal}`,
                );
                document.documentElement.classList.add(
                    `mi-doc-theme-${newVal}`,
                );
                syncThemeToChild(newVal);
            },
            immediate: true,
        },
    },

    methods: {
        toggleTheme() {
            this.currentTheme =
                this.currentTheme === 'light' ? 'dark' : 'light';
        },

        toggleVersionPop() {
            const val = !this.showVersionPop;

            const action = val ? 'add' : 'remove';
            document.body[`${action}EventListener`](
                'click',
                this.checkHideVersionPop,
            );

            this.showVersionPop = val;
        },

        checkHideVersionPop(event) {
            if (!this.$refs.version.contains(event.target)) {
                this.showVersionPop = false;
            }
        },

        onSwitchLang(lang) {
            this.$router.push(this.$route.path.replace(lang.from, lang.to));
        },

        onSwitchVersion(version) {
            if (version.link) {
                location.href = version.link;
            }
        },
    },
};
</script>

<style lang="less">
.mi-doc-header {
    width: 100%;
    // background-color: var(--mi-doc-header-background);
    user-select: none;
    position: fixed;
    z-index: 2;
    box-shadow: 0 0.21vw 0.31vw #8181811a;
    // background-image: radial-gradient(transparent 1px, #ffffff 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);

    &__top {
        display: flex;
        align-items: center;
        height: var(--mi-doc-header-top-height);
        padding: 0 var(--mi-doc-padding);

        &-nav {
            flex: 1;
            font-size: 0;
            text-align: right;

            > li {
                position: relative;
                display: inline-block;
                vertical-align: middle;
            }

            &-item {
                margin-left: 16px;
                min-width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: #ffffff;
            }

            &-title {
                display: block;
                font-size: 15px;
            }
        }
    }

    &__cube {
        position: relative;
        display: block;
        padding: 0 12px;
        color: #001938;
        background: #ffffff;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 20px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    &__version {
        padding-right: 20px;

        &::after {
            position: absolute;
            top: 10px;
            right: 9px;
            width: 5px;
            height: 5px;
            color: #001938;
            border: 1px solid;
            border-color: transparent transparent currentColor currentColor;
            transform: rotate(-45deg);
            content: '';
        }

        &-pop {
            position: absolute;
            top: 34px;
            left: 0;
            width: 100%;
            z-index: 99;
            color: #333;
            line-height: 36px;
            text-align: left;
            overflow: hidden;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 12px #ebedf0;
            transform-origin: top;
            transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

            &-item {
                padding-left: 12px;
                transition: 0.2s;

                &:hover {
                    color: var(--mi-doc-link-color);
                    background-color: #f7f8fa;
                }
            }
        }
    }

    &__logo {
        display: block;

        img {
            display: inline-block;
            width: 28px;
            margin-right: 12px;
            vertical-align: middle;
        }
    }

    &__title {
        display: inline-block;
        color: var(--mi-doc-header-title-color);
        font-size: 22px;
        vertical-align: middle;
    }

    &__subtitle {
        display: inline-block;
        color: #999;
        margin-left: 4px;
        vertical-align: -4px;
        font-size: 13px;
    }

    &__link {
        width: 30px;
        height: 30px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            color: #fff;
            font-size: 16px;
        }

        img {
            display: block;
            width: 25px;
            height: 25px;
            transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

            &:hover {
                transform: scale(1.5);
            }
        }
    }
}

.mi-doc-dropdown {
    &-enter,
    &-leave-active {
        transform: scaleY(0);
        opacity: 0;
    }
}
</style>
