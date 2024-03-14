import React from 'react'
import { Link } from 'react-router-dom'

const RemoveDomainController = () => {
    return (
        <div className='container my-5 pt-5'>
            <div className='row'>
                <div className='col-8'>
                    <h2>How to Remove (Demote) a Domain Controller</h2>
                    <p>
                        <small class="text-body-secondary">Updated on January 20, 2024</small>
                        <span className='ms-3'>
                            <a href="/"><small class="text-body-secondary">Windows Server</small></a>
                        </span>
                        <span className='ms-3'>
                            <a href="/"><small class="text-body-secondary">0 Comment</small></a>
                        </span>
                    </p>
                    <p>
                        Now that you have a new Domain Controller running in Active Directory, it’s time to demote the old Domain Controller. There are two options to remove a Domain Controller. It depends on whether the Domain Controller is accessible or not. In this article, you will learn how to remove a Domain Controller step-by-step.
                    </p>
                    <div className='mt-5'>
                        <h3>Table of contents</h3>
                        <ul>
                            <li><a href="#domainControllerRemovalOption">Domain Controller removal options</a></li>
                            <li><a href="#removeDomainControllerwServerM">Remove Domain Controller with Server Manager</a></li>
                            <ul>
                                <li><a href="#">Step 1. Move FSMO roles (optional)</a></li>
                                <li><a href="#">Step 2. Test Domain Controller uninstallation</a></li>
                                <li><a href="#">Step 3. Demote Domain Controller</a></li>
                                <li><a href="#">Step 4. Remove Active Directory Domain Services role</a></li>
                                <li><a href="#">Step 5. Remove AD computer object</a></li>
                                <li><a href="#">Step 6. Remove server from Active Directory Sites and Services</a></li>
                                <li><a href="#">Step 7. Remove DNS leftovers</a></li>
                            </ul>
                            <li><Link to="#">Remove Domain Controller manually</Link></li>
                            <li><Link to="#">Verify Domain Controller health</Link></li>
                            <li><Link to="#">Conclusion</Link></li>
                        </ul>
                    </div>
                    <div className='mb-5 pt-5' id="domainControllerRemovalOption">
                        <h3 className='pt-4'>Domain Controller removal options</h3>
                        <p className='mt-4'>
                            The preferred method to demote a Domain Controller is using Server Manager or PowerShell. Which one you choose is up to you, and they are, in the end the same. But there are times when the Domain Controller can’t boot anymore, and you can’t bring it back up anymore. Then, you must choose the method to remove it manually.
                        </p>
                        <p className='mt-4'>
                            To make it easier, you have the below options:
                        </p>
                        <ul>
                            <li><b>Option 1: Domain Controller is accessible</b>- Remove the Domain Controller with Server Manager or PowerShell.</li>
                            <li><b>Option 2: Domain Controller is NOT accessible</b>- Remove the Domain Controller manually.</li>
                        </ul>
                        <p className='mt-4'>
                        Let’s look at both options to delete a Domain Controller in Active Directory and its cleanup process.
                        </p>
                    </div>
                    <div className='mb-5 pt-5' id="removeDomainControllerwServerM">
                        <h3 className='pt-4'>Remove Domain Controller with Server Manager</h3>
                        <p className='mt-4'>
                            To demote a Domain Controller using Server Manager, go through the below steps:
                        </p>
                        <div>
                            <h4 className='mt-4'>Step 1. Move FSMO roles (optional)</h4>
                            <p className='mt-4'>
                                The FSMO roles will automatically move to another Domain Controller when you remove the Domain Controller through the removal wizard. If you would like to <Link to="#"> move the FSMO roles</Link> and not let the uninstall process do it automatically for you, you can do so.
                            </p>
                        </div>
                        <div>
                            <h4 className='mt-4'>Step 2. Test Domain Controller uninstallation</h4>
                            <p className='mt-4'>
                            An excellent way is to run the <a href="https://learn.microsoft.com/en-us/powershell/module/addsdeployment/test-addsdomaincontrolleruninstallation?view=windowsserver2022-ps" target="_blank" rel="noopener noreferrer">Test-ADDSDomainControllerUninstallation</a> cmdlet before you start with the Domain Controller removal. This will check and alert if everything is set or if there are any issues.                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RemoveDomainController