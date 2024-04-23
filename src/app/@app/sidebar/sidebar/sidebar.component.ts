import { Component, inject, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { EmrNavigationModule } from '@elementar/components';
import { MatRipple } from '@angular/material/core';
import { OrderByPipe } from '@elementar/components';
import { ToolbarComponent } from '@app/sidebar/_toolbar/toolbar.component';
import { UpgradeToProComponent } from '@app/sidebar/_upgrade-to-pro/upgrade-to-pro.component';
import { UpgradeNowComponent } from '@app/sidebar/_upgrade-now/upgrade-now.component';
import { UsedSpaceComponent } from '@app/sidebar/_used-space/used-space.component';

export interface NavItem {
  type: string;
  name: string;
  icon?: string;
  id?: string | number;
  link?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    EmrNavigationModule,
    MatRipple,
    ToolbarComponent,
    OrderByPipe,
    UpgradeToProComponent,
    UpgradeNowComponent,
    UsedSpaceComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  host: {
    'class': 'sidebar'
  }
})
export class SidebarComponent {
  router = inject(Router);
  location = inject(Location);
  height: string | null = '200px';

  @ViewChild('navigation', { static: true })
  navigation!: any;

  navItems: NavItem[] = [
    {
      id: 'customization',
      type: 'group',
      name: 'Customization',
      icon: 'tune',
      children: [
        {
          type: 'link',
          name: 'Colors',
          link: '/pages/customization/colors'
        },
        {
          type: 'link',
          name: 'Themes',
          link: '/pages/customization/themes'
        }
      ]
    },
    {
      id: 'dashboard',
      type: 'group',
      name: 'Dashboard',
      icon: 'dashboard',
      children: [
        {
          type: 'link',
          name: 'Basic',
          link: '/pages/dashboard'
        },
        {
          type: 'link',
          name: 'Ecommerce',
          link: '/pages/dashboard/ecommerce'
        },
        {
          type: 'link',
          name: 'Banking',
          link: '/pages/dashboard/banking'
        },
        {
          type: 'link',
          name: 'Echarts',
          link: '/pages/dashboard/echarts'
        },
      ]
    },
    {
      id: 'navigation',
      type: 'group',
      icon: 'menu',
      name: 'Navigation',
      children: [
        {
          type: 'link',
          name: 'Navigation',
          link: '/pages/navigation/navigation'
        },
        {
          type: 'link',
          name: 'Breadcrumbs',
          link: '/pages/navigation/breadcrumbs'
        },
        {
          type: 'link',
          name: 'Tab Panel',
          link: '/pages/navigation/tab-panel'
        },
      ]
    },
    {
      id: 'forms',
      type: 'group',
      icon: 'dns',
      name: 'Forms',
      children: [
        {
          type: 'link',
          name: 'Autocomplete',
          link: '/pages/forms/autocomplete'
        },
        {
          type: 'link',
          name: 'Input',
          link: '/pages/forms/input'
        },
        {
          type: 'link',
          name: 'Buttons',
          link: '/pages/forms/buttons'
        },
        {
          type: 'link',
          name: 'Slide Toggle',
          link: '/pages/forms/slide-toggle'
        },
        {
          type: 'link',
          name: 'Checkbox',
          link: '/pages/forms/checkbox'
        },
        {
          type: 'link',
          name: 'Radio',
          link: '/pages/forms/radio'
        },
        {
          type: 'link',
          name: 'Select',
          link: '/pages/forms/select'
        },
        {
          type: 'link',
          name: 'Segmented',
          link: '/pages/forms/segmented'
        },
        {
          type: 'link',
          name: 'Pin Input',
          link: '/pages/forms/pin-input'
        },
        {
          type: 'link',
          name: 'Number Input',
          link: '/pages/forms/number-input'
        },
        {
          type: 'link',
          name: 'Button Toggle',
          link: '/pages/forms/button-toggle'
        },
        {
          type: 'link',
          name: 'Phone Input',
          link: '/pages/forms/phone-input'
        }
      ]
    },
    {
      id: 'components',
      type: 'group',
      icon: 'grid_view',
      name: 'Components',
      children: [
        {
          type: 'link',
          name: 'Alert',
          link: '/pages/components/alert'
        },
        {
          type: 'link',
          name: 'Bottom Sheet',
          link: '/pages/components/bottom-sheet'
        },
        {
          type: 'link',
          name: 'Card',
          link: '/pages/components/card'
        },
        {
          type: 'link',
          name: 'Carousel',
          link: '/pages/components/carousel'
        },
        {
          type: 'link',
          name: 'Incidents',
          link: '/pages/components/incidents'
        },
        {
          type: 'link',
          name: 'Expand',
          link: '/pages/components/expand'
        },
        {
          type: 'link',
          name: 'Content Fade',
          link: '/pages/components/content-fade'
        },
        {
          type: 'link',
          name: 'Icon',
          link: '/pages/components/icon'
        },
        {
          type: 'link',
          name: 'Badge',
          link: '/pages/components/badge'
        },
        {
          type: 'link',
          name: 'Avatar',
          link: '/pages/components/avatar'
        },
        {
          type: 'link',
          name: 'Chips',
          link: '/pages/components/chips'
        },
        {
          type: 'link',
          name: 'Datepicker',
          link: '/pages/components/datepicker'
        },
        {
          type: 'link',
          name: 'Tabs',
          link: '/pages/components/tabs'
        },
        {
          type: 'link',
          name: 'Menu',
          link: '/pages/components/menu'
        },
        {
          type: 'link',
          name: 'Paginator',
          link: '/pages/components/paginator'
        },
        {
          type: 'link',
          name: 'Popover',
          link: '/pages/components/popover'
        },
        {
          type: 'link',
          name: 'Tooltip',
          link: '/pages/components/tooltip'
        },
        {
          type: 'link',
          name: 'Gauge',
          link: '/pages/components/gauge'
        },
        {
          type: 'link',
          name: 'Slider',
          link: '/pages/components/slider'
        },
        {
          type: 'link',
          name: 'Table',
          link: '/pages/components/table'
        },
        {
          type: 'link',
          name: 'Timeline',
          link: '/pages/components/timeline'
        },
        {
          type: 'link',
          name: 'Dialog',
          link: '/pages/components/dialog'
        },
        {
          type: 'link',
          name: 'Upload',
          link: '/pages/components/upload'
        },
        {
          type: 'link',
          name: 'Panel',
          link: '/pages/components/panel'
        },
        {
          type: 'link',
          name: 'Resizable Container',
          link: '/pages/components/resizable-container'
        },
        {
          type: 'link',
          name: 'Snackbar',
          link: '/pages/components/snackbar'
        },
        {
          type: 'link',
          name: 'Command Bar',
          link: '/pages/components/command-bar'
        },
        {
          type: 'link',
          name: 'Color Picker',
          link: '/pages/components/color-picker'
        },
        {
          type: 'link',
          name: 'Divider',
          link: '/pages/components/divider'
        },
        {
          type: 'link',
          name: 'Skeleton',
          link: '/pages/components/skeleton'
        },
        {
          type: 'link',
          name: 'Filter Builder',
          link: '/pages/components/filter-builder'
        },
        {
          type: 'link',
          name: 'Expansion Panel',
          link: '/pages/components/expansion-panel'
        },
        {
          type: 'link',
          name: 'List',
          link: '/pages/components/list'
        },
        {
          type: 'link',
          name: 'Progress Bar',
          link: '/pages/components/progress-bar'
        },
        {
          type: 'link',
          name: 'Progress Spinner',
          link: '/pages/components/progress-spinner'
        },
        {
          type: 'link',
          name: 'Stepper',
          link: '/pages/components/stepper'
        },
        {
          type: 'link',
          name: 'Toolbar',
          link: '/pages/components/toolbar'
        },
        {
          type: 'link',
          name: 'Tree',
          link: '/pages/components/tree'
        },
        {
          type: 'link',
          name: 'Password Strength',
          link: '/pages/components/password-strength'
        },
        {
          type: 'link',
          name: 'Layout',
          link: '/pages/components/layout'
        },
        {
          type: 'link',
          name: 'Suggestions',
          link: '/pages/components/suggestions'
        },
        {
          type: 'link',
          name: 'Announcement',
          link: '/pages/components/announcement'
        },
        {
          type: 'link',
          name: 'Micro Chart',
          link: '/pages/components/micro-chart'
        },
        {
          type: 'link',
          name: 'Sidebar Widgets',
          link: '/pages/components/sidebar-widgets'
        }
      ]
    },
    {
      id: 'auth',
      type: 'group',
      icon: 'lock',
      name: 'Auth',
      children: [
        {
          type: 'link',
          name: 'Sign In',
          link: '/auth/sign-in'
        },
        {
          type: 'link',
          name: 'Sign Up',
          link: '/auth/signup'
        },
        {
          type: 'link',
          name: 'Forgot Password',
          link: '/auth/forgot-password'
        },
        {
          type: 'link',
          name: 'Password Reset',
          link: '/auth/password-reset'
        },
        {
          type: 'link',
          name: 'Set New Password',
          link: '/auth/set-new-password'
        },
        {
          type: 'link',
          name: 'Done',
          link: '/auth/done'
        },
        {
          type: 'link',
          name: 'Create Account',
          link: '/auth/create-account'
        },
      ]
    },
    {
      id: 'profile',
      type: 'group',
      name: 'User Profile',
      icon: 'person',
      children: [
        {
          type: 'link',
          name: 'Talent Profile',
          link: '/pages/user-profile/talent-profile'
        }
      ]
    },
    {
      id: 'account',
      type: 'group',
      name: 'Account',
      icon: 'badge',
      children: [
        {
          type: 'link',
          name: 'Settings',
          link: '/pages/account/settings'
        }
      ]
    },
    {
      id: 'file-manager',
      type: 'group',
      icon: 'backup',
      name: 'File Manager',
      children: [
        {
          type: 'link',
          name: 'Overview',
          link: '/pages/file-manager'
        }
      ]
    },
  ];
  navItemLinks: NavItem[] = [];
  activeLinkId: any = '/';

  ngOnInit() {
    this.navItems.forEach(navItem => {
      this.navItemLinks.push(navItem);

      if (navItem.children) {
        this.navItemLinks = this.navItemLinks.concat(navItem.children as NavItem[]);
      }
    });
    this._activateLink();
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this._activateLink();
      })
    ;
  }

  private _activateLink() {
    const activeLink = this.navItemLinks.find(
      navItem => navItem.link === this.location.path()
    );

    if (activeLink) {
      this.activeLinkId = activeLink.link;
    } else {
      this.activeLinkId = null;
    }
  }
}
