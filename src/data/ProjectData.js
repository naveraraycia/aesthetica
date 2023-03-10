import valand1 from '../assets/img/project1.jpg'
import valand2 from '../assets/img/velvet/velvet-landing2.jpg'
import valand3 from '../assets/img/velvet/velvet-landing3.jpg'
import valr1 from '../assets/img/velvet/velvet-lr1.jpg'
import valr2 from '../assets/img/velvet/velvet-lr2.jpg'
import valr3 from '../assets/img/velvet/velvet-lr3.jpg'
import vakitchen1 from '../assets/img/velvet/velvet-k1.jpg'
import vakitchen2 from '../assets/img/velvet/velvet-k2.jpg'
import vabed1 from '../assets/img/velvet/velvet-bed1.jpg'
import vabed2 from '../assets/img/velvet/velvet-bed2.jpg'
import vabed3 from '../assets/img/velvet/velvet-bed3.jpg'
import vabed4 from '../assets/img/velvet/velvet-bed4.jpg'
import vabed5 from '../assets/img/velvet/velvet-bed5.jpg'
import vabath1 from '../assets/img/velvet/velvet-bath1.jpg'
import vabath2 from '../assets/img/velvet/velvet-bath2.jpg'
import vabath3 from '../assets/img/velvet/velvet-bath3.jpg'

import daland1 from '../assets/img/aboutImg2.jpg'
import dalr1 from '../assets/img/deluxe/deluxe-lr1.jpg'
import dalr2 from '../assets/img/deluxe/deluxe-lr2.jpg'
import dalr3 from '../assets/img/deluxe/deluxe-lr3.jpg'
import dakitchen1 from '../assets/img/deluxe/deluxe-k1.jpg'
import dakitchen2 from '../assets/img/deluxe/deluxe-k2.jpg'
import dabed1 from '../assets/img/deluxe/deluxe-bed1.jpg'
import dabed2 from '../assets/img/deluxe/deluxe-bed2.jpg'
import dabed3 from '../assets/img/deluxe/deluxe-bed3.jpg'
import dabath1 from '../assets/img/deluxe/deluxe-bath1.jpg'
import dabath2 from '../assets/img/deluxe/deluxe-bath2.jpg'

import maland1 from '../assets/img/project3.jpg'
import maland2 from '../assets/img/mono/mono-land2.jpg'
import maland3 from '../assets/img/mono/mono-land3.jpg'
import malr1 from '../assets/img/mono/mono-lr1.jpg'
import malr2 from '../assets/img/mono/mono-lr2.jpg'
import malr3 from '../assets/img/mono/mono-lr3.jpg'
import makitchen1 from '../assets/img/mono/mono-k1.jpg'
import makitchen2 from '../assets/img/mono/mono-k2.jpg'
import mabed1 from '../assets/img/mono/mono-bed1.jpg'
import mabed2 from '../assets/img/mono/mono-bed2.jpg'
import mabed3 from '../assets/img/mono/mono-bed3.jpg'
import mabed4 from '../assets/img/mono/mono-bed4.jpg'
import mabed5 from '../assets/img/mono/mono-bed5.jpg'
import mabed6 from '../assets/img/mono/mono-bed6.jpg'
import mabath1 from '../assets/img/mono/mono-bath1.jpg'
import mabath2 from '../assets/img/mono/mono-bath2.jpg'
import mabath3 from '../assets/img/mono/mono-bath3.jpg'
import mabath4 from '../assets/img/mono/mono-bath4.jpg'
import mabath5 from '../assets/img/mono/mono-bath5.jpg'

import baland1 from '../assets/img/project4.jpg'
import baland2 from '../assets/img/box/ba-land2.jpg'
import balr1 from '../assets/img/box/ba-lr2.jpg'
import balr2 from '../assets/img/box/ba-lr3.jpg'
import bakitchen1 from '../assets/img/box/ba-kitchen1.jpg'
import bakitchen2 from '../assets/img/box/ba-kitchen2.jpg'
import babed1 from '../assets/img/box/ba-bed1.jpg'
import babed2 from '../assets/img/box/ba-bed2.jpg'
import babed3 from '../assets/img/box/ba-bed3.jpg'
import babath1 from '../assets/img/box/ba-bath1.jpg'
import babath2 from '../assets/img/box/ba-bath2.jpg'

const ProjectData = [
  {
    id: 1,
    name: 'Velvet Architecture',
    address: '7644 Main St. 63105',
    bedrooms: 5,
    bathrooms: 3,
    livingrooms: 3,
    stories: 2,
    chosen: 34,
    inquired: 45,
    rating: 5,
    landingImgs: [valand1, valand2, valand3],
    livingroomImgs: [valr1, valr2, valr3],
    kitchenImgs: [vakitchen1, vakitchen2],
    bedroomImgs: [vabed1, vabed2, vabed3, vabed4, vabed5],
    bathroomImgs: [vabath1, vabath2, vabath3]
  },
  {
    id: 2,
    name: 'Deluxe Architecture',
    address: '8790 Middle St. 54213',
    bedrooms: 3,
    stories: 2,
    bathrooms: 2,
    livingrooms: 1,
    chosen: 40,
    inquired: 63,
    rating: 5,
    landingImgs: [daland1],
    livingroomImgs: [dalr1, dalr2, dalr3],
    kitchenImgs: [dakitchen1, dakitchen2],
    bedroomImgs: [dabed1, dabed2, dabed3],
    bathroomImgs: [dabath1, dabath2]
  },
  {
    id: 3,
    name: 'Mono Architecture',
    address: '7921 Top St. 94544',
    bedrooms: 6,
    stories: 3,
    bathrooms: 5,
    livingrooms: 2,
    chosen: 29,
    inquired: 48,
    rating: 5,
    landingImgs: [maland1, maland2, maland3],
    livingroomImgs: [malr1, malr2, malr3],
    kitchenImgs: [makitchen1, makitchen2],
    bedroomImgs: [mabed1, mabed2, mabed3, mabed4, mabed5, mabed6],
    bathroomImgs: [mabath1, mabath2, mabath3, mabath4, mabath5]
  },
  {
    id: 4,
    name: 'Box Architecture',
    address: '5578 Front St. 6827',
    bedrooms: 3,
    stories: 2,
    bathrooms: 2,
    livingrooms: 1,
    chosen: 58,
    inquired: 68,
    rating: 5,
    landingImgs: [baland1, baland2],
    livingroomImgs: [baland2, balr1, balr2],
    kitchenImgs: [bakitchen1, bakitchen2],
    bedroomImgs: [babed1, babed2, babed3],
    bathroomImgs: [babath1, babath2]
  }
]

export default ProjectData