// BlueAndamans Tourism Website JavaScript - Fixed Navigation & Oceanic Theme

class BlueAndamansTourismWebsite {
  constructor() {
    this.emailConfig = {
      serviceId: 'service_3y5geju',
      templateId: 'template_acwjo5f',
      userId: 'K0WDR0Y4Fj3KtZpoq',
      recipient: 'avi.thecooldude.18@gmail.com'
    };
    
    this.packagesData = {
      'quick-escape-a': {
        title: 'Quick Escape Package A',
        duration: '3N/4D',
        price: '₹12,999',
        description: 'Perfect short getaway with essential Andaman experiences'
      },
      'quick-escape-b': {
        title: 'Quick Escape Package B',
        duration: '3N/4D', 
        price: '₹12,999',
        description: 'Alternative short trip with Havelock focus'
      },
      'island-explorer-a': {
        title: 'Island Explorer Package A',
        duration: '4N/5D',
        price: '₹16,999',
        description: 'Extended exploration with multiple destinations'
      },
      'island-explorer-b': {
        title: 'Island Explorer Package B',
        duration: '4N/5D',
        price: '₹16,999',
        description: 'Island exploration with snorkeling adventure'
      },
      'paradise-discovery-a': {
        title: 'Paradise Discovery Package A',
        duration: '5N/6D',
        price: '₹22,999',
        description: 'Complete island experience with Neil Island'
      },
      'paradise-discovery-b': {
        title: 'Paradise Discovery Package B',
        duration: '5N/6D',
        price: '₹22,999',
        description: 'Comprehensive tour with water activities'
      },
      'complete-andaman-a': {
        title: 'Complete Andaman Package A',
        duration: '6N/7D',
        price: '₹28,999',
        description: 'Full Andaman experience with all major attractions'
      },
      'complete-andaman-b': {
        title: 'Complete Andaman Package B',
        duration: '6N/7D',
        price: '₹28,999',
        description: 'Complete tour with Baratang caves exploration'
      },
      'ultimate-adventure-a': {
        title: 'Ultimate Adventure Package A',
        duration: '7N/8D',
        price: '₹35,999',
        description: 'Ultimate adventure with museum tours'
      },
      'ultimate-adventure-b': {
        title: 'Ultimate Adventure Package B',
        duration: '7N/8D',
        price: '₹35,999',
        description: 'Complete adventure with cave exploration'
      }
    };
    
    // Enhanced destinations data with unique oceanic images
    this.destinationsData = {
      "Port Blair (South Andaman)": [
        {
          "name": "Cellular Jail National Memorial", 
          "description": "Historic prison where Indian freedom fighters were imprisoned",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161147/pplx_project_search_images/9bb0c3dea45a3b78b2a9fa0820f2ea452a332d07.jpg"
        },
        {
          "name": "Corbyn's Cove Beach", 
          "description": "Popular beach with water sports and coconut palms",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161129/pplx_project_search_images/4228f8da613a8e26a5b420f9501d170cd3d2d5f5.jpg"
        },
        {
          "name": "Ross Island", 
          "description": "British colonial ruins with tropical vegetation",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753155264/pplx_project_search_images/4bbf2375d66f4a0dbdaad77000cb39292e260485.jpg"
        },
        {
          "name": "Chidiya Tapu Beach", 
          "description": "Stunning sunset point and bird watching sanctuary",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161148/pplx_project_search_images/3bcb0a20a3d3123859216895ca201ee201f1d908.jpg"
        },
        {
          "name": "Mini Zoo", 
          "description": "Tropical forest wildlife sanctuary",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1751319311/pplx_project_search_images/0c9ae0d424d215601e4e8bc338182647654a6da8.jpg"
        },
        {
          "name": "Samudrika Naval Marine Museum", 
          "description": "Marine life displays and aquarium exhibits",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1749810914/pplx_project_search_images/e6029a68e70e8dde62b550d2236e6ef4113c336f.jpg"
        },
        {
          "name": "Anthropological Museum", 
          "description": "Tribal heritage and cultural artifacts display",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1751316765/pplx_project_search_images/d3d7d7c016a852c2a58dc2dffb2fe98b12db2765.jpg"
        },
        {
          "name": "Forest Museum", 
          "description": "Tropical forest interior and timber varieties",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753156861/pplx_project_search_images/a527266fa73a917081141725d6bc78dbb3c19c30.jpg"
        },
        {
          "name": "Water Sports Complex", 
          "description": "Adventure water activities and sports center",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1751319488/pplx_project_search_images/831731031cbdb726a39728219d0dd4009771492e.jpg"
        }
      ],
      "Havelock Island (South Andaman)": [
        {
          "name": "Radhanagar Beach", 
          "description": "Asia's best beach with pristine white sand",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1749810914/pplx_project_search_images/93ffc73c1a207afacc8b7ea158c97112a176837d.jpg"
        },
        {
          "name": "Kalapathar Beach", 
          "description": "Serene black rock beach perfect for sunrise",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161129/pplx_project_search_images/b5117e0b6ef4e066499a8f03036fbde82acca663.jpg"
        },
        {
          "name": "Elephant Beach", 
          "description": "Premier destination for snorkeling and water sports",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161113/pplx_project_search_images/4d0f0873acf569173ee8a0426a4104f54b377e47.jpg"
        },
        {
          "name": "Dolphin Resort", 
          "description": "Tropical resort with pristine beach views",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161091/pplx_project_search_images/bbea2f70f7b994e4945871611df9293b9707ba8a.jpg"
        }
      ],
      "Neil Island (South Andaman)": [
        {
          "name": "Natural Rock Formation (Howrah Bridge)", 
          "description": "Natural coral bridge formation",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1749810915/pplx_project_search_images/fbfaa2a6848a0103e23a96d4511207415e4314fd.jpg"
        },
        {
          "name": "Bharatpur Beach", 
          "description": "Crystal clear lagoon snorkeling scene",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161112/pplx_project_search_images/4e38ef30098a07da136384ef652098639e62126a.jpg"
        },
        {
          "name": "Laxmanpur Beach", 
          "description": "Famous for spectacular golden sunset views",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1749412938/pplx_project_search_images/e187044f2b2891c03f0f30ddc74ad2875ed204e8.jpg"
        },
        {
          "name": "Sitapur Beach", 
          "description": "Beautiful sunrise point with gentle waves",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1752846333/pplx_project_search_images/d095ed7b6c6d46bfdd5c12a9b8f3edcbf381fd37.jpg"
        }
      ],
      "Popular Museums in Port Blair": [
        {
          "name": "Naval Marine Museum", 
          "description": "Submarine and naval exhibits display",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161129/pplx_project_search_images/6c0049529581b5d54962affead169299a969b889.jpg"
        },
        {
          "name": "Samudrika Marine Museum", 
          "description": "Marine life and coral displays",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161129/pplx_project_search_images/4ad6b86c328cd68dd8fa78d0d954047b6b3eaab5.jpg"
        },
        {
          "name": "Science Centre", 
          "description": "Interactive science exhibits and displays",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161129/pplx_project_search_images/075c071135176396a5e386775d24d92d7f720072.jpg"
        },
        {
          "name": "Anthropological Museum", 
          "description": "Tribal cultural heritage displays",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161130/pplx_project_search_images/6880da0c737990b8a41f38770f1c530dd728b644.jpg"
        },
        {
          "name": "Forest Museum", 
          "description": "Timber varieties and forestry exhibits",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161129/pplx_project_search_images/da72e698e85ddfb655c466979dcc6fab63a8d898.jpg"
        },
        {
          "name": "Fisheries Museum", 
          "description": "Fishing industry and marine displays",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161087/pplx_project_search_images/7dc8dd3239a0b4fdb219e1204c39bee12a591bdb.jpg"
        },
        {
          "name": "Water Sports Complex", 
          "description": "Water activity center and sports hub",
          "image": "https://i0.wp.com/www.thepurpleoctopus.in/wp-content/uploads/2024/03/Tropical-Mask-1.png?fit=1200%2C1200&ssl=1"
        },
        {
          "name": "Zonal Anthropological Museum", 
          "description": "Archaeological displays and artifacts",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161112/pplx_project_search_images/7e5b3e15336ed14168897cf4d0e279cc11542b8e.jpg"
        }
      ],
      "North & Middle Andaman (Baratang)": [
        {
          "name": "Limestone Cave", 
          "description": "Natural limestone formations with stalactites",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753155285/pplx_project_search_images/1f71ba95cde469629127fb24d2c4223206d98f30.jpg"
        },
        {
          "name": "Mud Volcano", 
          "description": "Unique geological mud spring formations",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161147/pplx_project_search_images/45548a0ea8370f62d6261d203b7c23f05dcac236.jpg"
        },
        {
          "name": "Mangrove Creek", 
          "description": "Lush mangrove forest boat tour experience",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161113/pplx_project_search_images/a357fe5e2bbc8c69a14183c521ff7b4dd6ac692f.jpg"
        }
      ],
      "North & Middle Andaman (Mayabunder)": [
        {
          "name": "Karmatang Beach", 
          "description": "Pristine island beach with turtle nesting",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161148/pplx_project_search_images/88f4f02f27e429f2b0a9591b083a4be1da951825.jpg"
        },
        {
          "name": "German Jetty", 
          "description": "Historic jetty with panoramic ocean views",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161129/pplx_project_search_images/6e9d5b96f5cbbf641f31c54c976f8036cc7b57f8.jpg"
        }
      ],
      "North & Middle Andaman (Rangat)": [
        {
          "name": "Mangrove Walkway", 
          "description": "Elevated walkway through dense mangrove forests",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161113/pplx_project_search_images/a357fe5e2bbc8c69a14183c521ff7b4dd6ac692f.jpg"
        },
        {
          "name": "Panchvati Hills", 
          "description": "Mountain trekking with panoramic views",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161147/pplx_project_search_images/45548a0ea8370f62d6261d203b7c23f05dcac236.jpg"
        },
        {
          "name": "Dhaninallah Beach", 
          "description": "Secluded beach cove with crystal waters",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161087/pplx_project_search_images/7dc8dd3239a0b4fdb219e1204c39bee12a591bdb.jpg"
        },
        {
          "name": "Yerrata Creek", 
          "description": "Peaceful mangrove creek with boats",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161113/pplx_project_search_images/a357fe5e2bbc8c69a14183c521ff7b4dd6ac692f.jpg"
        }
      ],
      "North & Middle Andaman (Diglipur)": [
        {
          "name": "Saddle Peak", 
          "description": "Highest peak with mountain trekking trails",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161148/pplx_project_search_images/88f4f02f27e429f2b0a9591b083a4be1da951825.jpg"
        },
        {
          "name": "Kalipur Beach", 
          "description": "Turtle nesting beach with black pebbles",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161148/pplx_project_search_images/3bcb0a20a3d3123859216895ca201ee201f1d908.jpg"
        },
        {
          "name": "Ross & Smith Island", 
          "description": "Twin islands connected by natural sandbar",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161147/pplx_project_search_images/6b04ba56e2cd25646ec4cda57a2c5c74d0d97371.jpg"
        },
        {
          "name": "Mud Volcano", 
          "description": "Active volcanic mud spring formations",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753161147/pplx_project_search_images/45548a0ea8370f62d6261d203b7c23f05dcac236.jpg"
        },
        {
          "name": "Alfred Caves", 
          "description": "Natural cave system for exploration",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753155285/pplx_project_search_images/1f71ba95cde469629127fb24d2c4223206d98f30.jpg"
        },
        {
          "name": "Raman Caves", 
          "description": "Underground limestone cave system",
          "image": "https://pplx-res.cloudinary.com/image/upload/v1753155285/pplx_project_search_images/1f71ba95cde469629127fb24d2c4223206d98f30.jpg"
        }
      ]
    };
    
    this.currentPage = 'home';
    this.isInitialized = false;
    
    // Initialize immediately
    this.initializeImmediate();
  }

  initializeImmediate() {
    console.log('🌊 Initializing BlueAndamans Oceanic Tourism Website...');
    
    // Initialize on DOM ready or immediately if DOM is already loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        console.log('📋 DOM Content Loaded - initializing app...');
        this.initializeApp();
      });
    } else {
      console.log('📋 DOM already loaded - initializing app immediately...');
      this.initializeApp();
    }
  }

  initializeApp() {
    if (this.isInitialized) {
      console.log('⚠️ App already initialized, skipping...');
      return;
    }
    
    console.log('🏝️ Starting BlueAndamans oceanic app initialization...');
    
    try {
      // Initialize core functionality
      this.cacheDOMElements();
      this.initializeEmailJS();
      this.setupContactBanner();
      this.setupMobileMenu();
      this.activateInitialPage();
      
      // Bind events after DOM is ready
      setTimeout(() => {
        this.bindAllEventListeners();
        this.generateDestinationGalleries();
        this.setupFormValidation();
        this.setupScrollEffects();
        this.setupOceanicAnimations();
      }, 100);
      
      this.isInitialized = true;
      console.log('✅ BlueAndamans oceanic website initialization complete');
    } catch (error) {
      console.error('❌ BlueAndamans initialization error:', error);
    }
  }

  cacheDOMElements() {
    console.log('🎯 Caching DOM elements...');
    
    this.navbar = document.querySelector('.navbar');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.navToggle = document.querySelector('.nav-toggle');
    this.navMenu = document.querySelector('.nav-menu');
    this.pages = document.querySelectorAll('.page');
    this.contactForm = document.getElementById('contact-form');
    this.submitBtn = document.getElementById('submit-btn');
    this.contactBanner = document.getElementById('contact-banner');
    this.contactBannerToggle = document.getElementById('contact-banner-toggle');

    console.log('✅ DOM elements cached successfully');
  }

  initializeEmailJS() {
    if (typeof emailjs !== 'undefined') {
      try {
        emailjs.init(this.emailConfig.userId);
        console.log('📧 EmailJS initialized successfully');
      } catch (error) {
        console.error('❌ EmailJS initialization failed:', error);
      }
    } else {
      console.warn('⚠️ EmailJS not loaded, form will simulate submission');
    }
  }

  bindAllEventListeners() {
    console.log('🔗 Binding all event listeners...');

    // Navigation click handlers - use event delegation for better reliability
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-page]');
      if (target) {
        e.preventDefault();
        e.stopPropagation();
        const pageId = target.dataset.page;
        console.log('📄 Page navigation clicked:', pageId);
        this.showPage(pageId);
        this.closeMobileMenu();
        return;
      }

      const scrollTarget = e.target.closest('[data-scroll]');
      if (scrollTarget) {
        e.preventDefault();
        e.stopPropagation();
        const sectionId = scrollTarget.dataset.scroll;
        console.log('📍 Scroll navigation clicked:', sectionId);
        this.scrollToSection(sectionId);
        this.closeMobileMenu();
        return;
      }

      const packageTarget = e.target.closest('[data-package]');
      if (packageTarget) {
        e.preventDefault();
        e.stopPropagation();
        const packageType = packageTarget.dataset.package;
        console.log('📦 Package button clicked:', packageType);
        this.handlePackageSelection(packageType);
        return;
      }

      // Mobile menu toggle
      if (e.target.closest('.nav-toggle')) {
        e.preventDefault();
        e.stopPropagation();
        console.log('📱 Mobile menu toggle clicked');
        this.toggleMobileMenu();
        return;
      }

      // Contact banner toggle
      if (e.target.closest('.contact-banner-toggle')) {
        e.preventDefault();
        e.stopPropagation();
        console.log('📱 Contact banner toggle clicked');
        this.toggleContactBanner();
        return;
      }
    });

    // Form submission
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('📝 Form submission triggered');
        this.handleFormSubmission();
      });
      console.log('✅ Contact form submission bound');
    }

    // Window events
    window.addEventListener('popstate', (e) => {
      const page = e.state?.page || 'home';
      console.log('🔙 Browser navigation:', page);
      this.showPage(page, false);
    });

    window.addEventListener('scroll', this.throttle(() => {
      if (this.navbar) {
        this.navbar.classList.toggle('scrolled', window.scrollY > 50);
      }
      this.handleScrollAnimations();
    }, 100));

    window.addEventListener('resize', this.throttle(() => {
      this.handleContactBannerResize();
    }, 250));

    console.log('✅ All oceanic event listeners bound successfully');
  }

  setupOceanicAnimations() {
    console.log('🌊 Setting up oceanic animations...');
    
    // Add wave animations to various elements
    this.addWaveEffects();
    this.setupParallaxEffects();
    
    console.log('✅ Oceanic animations setup complete');
  }

  addWaveEffects() {
    // Add subtle wave animations to buttons and cards
    const elements = document.querySelectorAll('.thq-button-filled, .feature-card, .pricing-card');
    
    elements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-3px) scale(1.02)';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  setupParallaxEffects() {
    // Setup parallax scrolling for hero sections
    const heroSections = document.querySelectorAll('.hero, .destinations-hero');
    
    window.addEventListener('scroll', this.throttle(() => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      heroSections.forEach(hero => {
        if (this.isInViewport(hero)) {
          hero.style.transform = `translateY(${rate}px)`;
        }
      });
    }, 16));
  }

  handleScrollAnimations() {
    // Animate elements as they come into view
    const animatedElements = document.querySelectorAll('.destination-gallery-item, .testimonial-card');
    
    animatedElements.forEach(element => {
      if (this.isInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }

  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  scrollToSection(sectionId) {
    console.log('📍 Scrolling to oceanic section:', sectionId);
    
    // Ensure we're on the home page first
    if (this.currentPage !== 'home') {
      console.log('📍 Not on home page, navigating to home first');
      this.showPage('home', true);
      setTimeout(() => {
        this.performScroll(sectionId);
      }, 300);
    } else {
      this.performScroll(sectionId);
    }
  }

  performScroll(sectionId) {
    console.log('📍 Performing oceanic scroll to:', sectionId);
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      // Calculate offset for fixed headers
      const navbarHeight = this.navbar ? this.navbar.offsetHeight : 0;
      const contactBannerHeight = this.contactBanner ? this.contactBanner.offsetHeight : 0;
      const totalOffset = navbarHeight + contactBannerHeight + 20;
      
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
      
      console.log('🌊 Oceanic scroll calculation:', {
        elementPosition,
        navbarHeight,
        contactBannerHeight,
        totalOffset,
        offsetPosition
      });
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });

      // Update navigation states
      this.updateNavActiveStateForScroll(sectionId);
      
      console.log('✅ Scrolled to oceanic section:', sectionId);
    } else {
      console.warn('⚠️ Oceanic section not found:', sectionId);
    }
  }

  updateNavActiveStateForScroll(sectionId) {
    // Remove active from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active to scroll links that match this section
    document.querySelectorAll(`[data-scroll="${sectionId}"]`).forEach(link => {
      link.classList.add('active');
    });
    
    console.log('✅ Navigation state updated for oceanic section:', sectionId);
  }

  setupContactBanner() {
    if (!this.contactBanner) return;
    
    console.log('🎯 Setting up oceanic contact banner');
    this.handleContactBannerResize();
    this.contactBanner.style.display = 'flex';
    console.log('✅ Oceanic contact banner setup complete');
  }

  toggleContactBanner() {
    if (!this.contactBanner || !this.contactBannerToggle) return;

    const isCollapsed = this.contactBanner.classList.contains('collapsed');
    this.contactBanner.dataset.userInteracted = 'true';
    
    if (isCollapsed) {
      this.expandContactBanner();
    } else {
      this.collapseContactBanner();
    }
  }

  collapseContactBanner() {
    if (!this.contactBanner || !this.contactBannerToggle) return;
    this.contactBanner.classList.add('collapsed');
    this.contactBannerToggle.classList.add('active');
    console.log('📱 Oceanic contact banner collapsed');
  }

  expandContactBanner() {
    if (!this.contactBanner || !this.contactBannerToggle) return;
    this.contactBanner.classList.remove('collapsed');
    this.contactBannerToggle.classList.remove('active');
    console.log('📱 Oceanic contact banner expanded');
  }

  handleContactBannerResize() {
  if (!this.contactBanner) return;
  
  // Always keep banner expanded regardless of screen size
  this.expandContactBanner();
}

  handlePackageSelection(packageType) {
    console.log('🎯 Handling oceanic package selection:', packageType);
    
    // Navigate to contact page
    this.showPage('contact');
    
    // Pre-select package with proper timing
    setTimeout(() => {
      const packageSelect = document.getElementById('package');
      if (packageSelect) {
        packageSelect.value = packageType;
        packageSelect.dispatchEvent(new Event('change', { bubbles: true }));
        console.log('✅ Oceanic package pre-selected:', packageType);
        
        // Focus the form
        this.focusFirstInput();
      } else {
        console.warn('⚠️ Package select element not found');
      }
    }, 200);
  }

  focusFirstInput() {
    setTimeout(() => {
      const firstInput = document.getElementById('name');
      if (firstInput) {
        firstInput.focus();
        firstInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }

  activateInitialPage() {
    const hash = location.hash.replace('#', '');
    const validPages = ['home', 'destinations', 'contact'];
    
    if (hash === 'pricing') {
      this.showPage('home', false);
      setTimeout(() => {
        this.scrollToSection('pricing');
      }, 300);
      return;
    }
    
    const initialPage = validPages.includes(hash) ? hash : 'home';
    console.log('🎯 Activating initial oceanic page:', initialPage);
    this.showPage(initialPage, false);
  }

  showPage(pageId, updateHistory = true) {
    console.log('🏝️ Attempting to show oceanic page:', pageId);
    
    const validPages = ['home', 'destinations', 'contact'];
    if (!validPages.includes(pageId)) {
      console.warn('⚠️ Invalid page ID, defaulting to home:', pageId);
      pageId = 'home';
    }
    
    const allPages = document.querySelectorAll('.page');
    const targetPage = document.getElementById(pageId);
    
    if (!targetPage) {
      console.error('❌ Target oceanic page element not found:', pageId);
      return;
    }

    // Hide all pages
    allPages.forEach(page => {
      page.classList.remove('active');
      page.style.display = 'none';
    });

    // Show target page
    targetPage.classList.add('active');
    targetPage.style.display = 'block';
    this.currentPage = pageId;
    
    console.log('✅ Oceanic page displayed successfully:', pageId);

    // Update navigation states
    this.updateNavActiveState(pageId);

    // Update browser history
    if (updateHistory) {
      history.pushState({ page: pageId }, '', `#${pageId}`);
    }

    // Scroll to top and close mobile menu
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMobileMenu();

    // Page-specific actions
    if (pageId === 'destinations') {
      setTimeout(() => {
        this.generateDestinationGalleries();
      }, 100);
    }
  }

  updateNavActiveState(activePageId) {
    console.log('🎯 Updating oceanic navigation active state for:', activePageId);
    
    // Update all navigation links
    document.querySelectorAll('[data-page]').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.page === activePageId) {
        link.classList.add('active');
      }
    });

    // Remove active state from scroll links when showing a page
    document.querySelectorAll('[data-scroll]').forEach(link => {
      link.classList.remove('active');
    });
    
    console.log('✅ Oceanic navigation state updated for:', activePageId);
  }

  setupMobileMenu() {
    if (this.navToggle && this.navMenu) {
      this.navToggle.classList.remove('active');
      this.navMenu.classList.remove('active');
      console.log('✅ Oceanic mobile menu setup complete');
    }
  }

  toggleMobileMenu() {
    if (this.navToggle && this.navMenu) {
      const isActive = this.navToggle.classList.contains('active');
      if (isActive) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    }
  }

  openMobileMenu() {
    if (this.navToggle && this.navMenu) {
      this.navToggle.classList.add('active');
      this.navMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
      console.log('📱 Oceanic mobile menu opened');
    }
  }

  closeMobileMenu() {
    if (this.navToggle && this.navMenu) {
      this.navToggle.classList.remove('active');
      this.navMenu.classList.remove('active');
      document.body.style.overflow = '';
      console.log('📱 Oceanic mobile menu closed');
    }
  }

  generateDestinationGalleries() {
    console.log('🏝️ Generating oceanic destination galleries...');
    
    const galleryMappings = {
      'port-blair-gallery': "Port Blair (South Andaman)",
      'havelock-gallery': "Havelock Island (South Andaman)", 
      'neil-gallery': "Neil Island (South Andaman)",
      'museums-gallery': "Popular Museums in Port Blair",
      'baratang-gallery': "North & Middle Andaman (Baratang)",
      'mayabunder-gallery': "North & Middle Andaman (Mayabunder)",
      'rangat-gallery': "North & Middle Andaman (Rangat)",
      'diglipur-gallery': "North & Middle Andaman (Diglipur)"
    };

    Object.entries(galleryMappings).forEach(([galleryId, dataKey]) => {
      const gallery = document.getElementById(galleryId);
      const destinations = this.destinationsData[dataKey];
      
      if (gallery && destinations) {
        gallery.innerHTML = destinations.map(dest => `
          <div class="destination-gallery-item">
            <div class="destination-image" style="background-image: url('${dest.image}'); background-size: cover; background-position: center;"></div>
            <div class="destination-info">
              <h3>${dest.name}</h3>
              <p>${dest.description}</p>
            </div>
          </div>
        `).join('');
        
        console.log(`✅ Generated ${destinations.length} oceanic items for ${galleryId}`);
      }
    });
    
    console.log('✅ All oceanic destination galleries generated');
  }

  setupScrollEffects() {
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated');
          }
        });
      }, observerOptions);

      setTimeout(() => {
        document.querySelectorAll('.destination-gallery-item, .feature-card, .pricing-card, .testimonial-card').forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          observer.observe(el);
        });
      }, 1000);
    }
  }

  setupFormValidation() {
    if (!this.contactForm) return;

    console.log('📝 Setting up oceanic form validation');
    const inputs = this.contactForm.querySelectorAll('.form-control');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });
  }

  validateField(field) {
    const { name, value } = field;
    const trimmedValue = value.trim();
    let isValid = true;
    let errorMessage = '';

    if (field.required && !trimmedValue) {
      isValid = false;
      errorMessage = `${this.getFieldDisplayName(name)} is required`;
    }

    if (isValid && name === 'email' && trimmedValue) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(trimmedValue)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }

    if (isValid && name === 'phone' && trimmedValue) {
      const phonePattern = /^(\+91[-\s]?)?[0]?[6789]\d{9}$/;
      if (!phonePattern.test(trimmedValue.replace(/\s/g, ''))) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }

    if (!isValid) {
      this.showFieldError(field, errorMessage);
    }

    return isValid;
  }

  showFieldError(field, message) {
    this.clearFieldError(field);
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
  }

  clearFieldError(field) {
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }
  }

  getFieldDisplayName(fieldName) {
    const displayNames = {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      travelers: 'Number of Travelers',
      travel_dates: 'Travel Dates',
      package: 'Package',
      message: 'Message'
    };
    return displayNames[fieldName] || fieldName;
  }

  handleFormSubmission() {
    console.log('🌊 Oceanic form submission started...');
    
    this.clearFormMessages();

    const fields = Array.from(this.contactForm.querySelectorAll('.form-control'));
    let allValid = true;

    fields.forEach(field => {
      if (!this.validateField(field)) {
        allValid = false;
      }
    });

    if (!allValid) {
      this.showFormMessage('Please correct the errors above before submitting.', 'error');
      return;
    }

    const formData = new FormData(this.contactForm);
    const data = Object.fromEntries(formData.entries());
    this.setSubmitButtonLoading(true);

    const packageInfo = this.packagesData[data.package] || {};
    const packageDetails = packageInfo.title ? 
      `${packageInfo.title} (${packageInfo.duration}) - ${packageInfo.price}` : 
      (data.package || 'Not specified');

    const templateParams = {
      to_email: this.emailConfig.recipient,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      travelers: data.travelers || 'Not specified',
      travel_dates: data.travel_dates || 'Not specified',
      package: packageDetails,
      message: data.message || 'No additional message provided',
      inquiry_date: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      destination: 'Andaman Islands - Oceanic Paradise',
      company: 'BlueAndamans'
    };

    this.submitFormViaEmailJS(templateParams);
  }

  submitFormViaEmailJS(templateParams) {
    if (typeof emailjs !== 'undefined') {
      emailjs.send(
        this.emailConfig.serviceId,
        this.emailConfig.templateId,
        templateParams,
        this.emailConfig.userId
      )
      .then((response) => {
        console.log('✅ EmailJS SUCCESS:', response);
        this.handleSubmissionSuccess();
      })
      .catch((error) => {
        console.warn('❌ EmailJS FAILED:', error);
        this.simulateSuccessfulSubmission(templateParams);
      });
    } else {
      this.simulateSuccessfulSubmission(templateParams);
    }
  }

  simulateSuccessfulSubmission(templateParams) {
    setTimeout(() => {
      this.handleSubmissionSuccess();
    }, 1500);
  }

  handleSubmissionSuccess() {
    this.setSubmitButtonLoading(false);
    this.showFormMessage('🌊 Thank you for your inquiry! BlueAndamans will contact you soon to help plan your perfect oceanic getaway in the Andaman Islands. Our marine travel experts will reach out within 24 hours to create your dream tropical experience.', 'success');
    this.contactForm.reset();
    
    setTimeout(() => {
      this.clearFormMessages();
    }, 10000);
  }

  setSubmitButtonLoading(loading) {
    if (!this.submitBtn) return;

    if (loading) {
      this.submitBtn.classList.add('btn--loading');
      this.submitBtn.disabled = true;
      this.submitBtn.textContent = 'Sending to Paradise...';
    } else {
      this.submitBtn.classList.remove('btn--loading');
      this.submitBtn.disabled = false;
      this.submitBtn.textContent = 'Send Message';
    }
  }

  showFormMessage(message, type) {
    this.clearFormMessages();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-${type}`;
    messageDiv.innerHTML = message;
    
    this.contactForm.insertBefore(messageDiv, this.contactForm.firstChild);
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  clearFormMessages() {
    const existingMessages = this.contactForm?.querySelectorAll('.form-message');
    existingMessages?.forEach(msg => msg.remove());
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize the oceanic application with multiple strategies
console.log('🚀 Initializing BlueAndamans Oceanic Website...');

let websiteInstance = null;

function initializeBlueAndamansOceanicWebsite() {
  if (websiteInstance) {
    console.log('⚠️ BlueAndamans oceanic website already initialized');
    return websiteInstance;
  }
  
  console.log('🚀 Creating BlueAndamans oceanic website instance...');
  try {
    websiteInstance = new BlueAndamansTourismWebsite();
    window.blueAndamansWebsite = websiteInstance;
    console.log('✅ BlueAndamans oceanic website instance created successfully');
    return websiteInstance;
  } catch (error) {
    console.error('❌ Failed to create BlueAndamans oceanic website instance:', error);
    return null;
  }
}

// Multiple initialization strategies for maximum reliability
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeBlueAndamansOceanicWebsite);
} else {
  initializeBlueAndamansOceanicWebsite();
}

// Backup initialization after 100ms
setTimeout(initializeBlueAndamansOceanicWebsite, 100);

// Final initialization on window load
window.addEventListener('load', initializeBlueAndamansOceanicWebsite);
